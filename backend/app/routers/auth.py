from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlmodel import select
import re

from app.core.database import get_session
from app.core.security import (
    get_password_hash,
    verify_password,
    create_access_token,
    is_allowed_untirta_email
)
from app.models.schema import (
    User,
    UserRegisterRequest,
    UserLoginRequest,
    UserResponse,
    AuthResponse
)

router = APIRouter(prefix="/api/auth", tags=["auth"])

@router.post("/register", response_model=AuthResponse, status_code=status.HTTP_201_CREATED)
async def register_user(
    payload: UserRegisterRequest,
    session: AsyncSession = Depends(get_session)
):
    clean_email = payload.email.strip().lower()

    # 1. Validasi Domain Khusus Untirta (@untirta.ac.id dan @student.untirta.ac.id)
    if not is_allowed_untirta_email(clean_email):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Registrasi ditolak. Hanya email dengan domain @untirta.ac.id atau @student.untirta.ac.id yang diizinkan."
        )

    # 2. Validasi Konfirmasi Password
    if payload.password != payload.confirm_password:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Konfirmasi kata sandi tidak cocok dengan kata sandi yang dimasukkan."
        )

    # 3. Validasi Kekuatan Password (minimal 8 karakter)
    if len(payload.password) < 8:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Kata sandi minimal harus 8 karakter demi keamanan akun Anda."
        )

    # 4. Cek apakah email sudah terdaftar
    stmt = select(User).where(User.email == clean_email)
    res = await session.execute(stmt)
    existing_user = res.scalars().first()
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email sudah terdaftar. Silakan gunakan tab Masuk atau gunakan email lain."
        )

    # 5. Hash Password & Simpan User Baru
    hashed_pwd = get_password_hash(payload.password)
    new_user = User(
        name=payload.name.strip(),
        email=clean_email,
        hashed_password=hashed_pwd,
        phone=payload.phone.strip() if payload.phone else None,
        address=payload.address.strip() if payload.address else None,
        postal_code=payload.postal_code.strip() if payload.postal_code else None,
        role=payload.role or "Mahasiswa",
        institution=payload.institution or "Untirta"
    )

    session.add(new_user)
    await session.commit()
    await session.refresh(new_user)

    # 6. Generate Token JWT
    token = create_access_token({"sub": new_user.id, "email": new_user.email})

    user_response = UserResponse(
        id=new_user.id,
        name=new_user.name,
        email=new_user.email,
        phone=new_user.phone,
        address=new_user.address,
        postal_code=new_user.postal_code,
        role=new_user.role,
        institution=new_user.institution,
        plan="Pro",
        created_at=new_user.created_at
    )

    return AuthResponse(access_token=token, user=user_response)

@router.post("/login", response_model=AuthResponse)
async def login_user(
    payload: UserLoginRequest,
    session: AsyncSession = Depends(get_session)
):
    clean_email = payload.email.strip().lower()

    # Cari user berdasarkan email
    stmt = select(User).where(User.email == clean_email)
    res = await session.execute(stmt)
    user = res.scalars().first()

    # Verifikasi kredensial
    if not user or not verify_password(payload.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email atau kata sandi tidak valid. Periksa kembali data login Anda."
        )

    token = create_access_token({"sub": user.id, "email": user.email})

    user_response = UserResponse(
        id=user.id,
        name=user.name,
        email=user.email,
        phone=user.phone,
        address=user.address,
        postal_code=user.postal_code,
        role=user.role,
        institution=user.institution,
        plan="Pro",
        created_at=user.created_at
    )

    return AuthResponse(access_token=token, user=user_response)
