import os
import uuid
import base64
import time
from fastapi import APIRouter, HTTPException, UploadFile, File, Form
from pydantic import BaseModel
from typing import Optional

router = APIRouter(prefix="/api/upload", tags=["Upload"])

UPLOAD_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "uploads", "images")
os.makedirs(UPLOAD_DIR, exist_ok=True)


class Base64UploadRequest(BaseModel):
    image_data: str
    filename: Optional[str] = None


@router.post("/image")
async def upload_image_base64(payload: Base64UploadRequest):
    """
    Saves a base64 encoded image to disk as a compact WebP/JPEG file
    and returns a short relative URL (e.g. /uploads/images/uuid.webp).
    """
    try:
        raw_data = payload.image_data
        if "," in raw_data:
            # Strip data:image/...;base64, prefix
            header, base64_str = raw_data.split(",", 1)
            ext = "webp" if "webp" in header else "jpg" if "jpeg" in header or "jpg" in header else "png"
        else:
            base64_str = raw_data
            ext = "webp"

        image_bytes = base64.b64decode(base64_str)
        file_id = f"img_{int(time.time())}_{uuid.uuid4().hex[:8]}.{ext}"
        file_path = os.path.join(UPLOAD_DIR, file_id)

        with open(file_path, "wb") as f:
            f.write(image_bytes)

        relative_url = f"/uploads/images/{file_id}"
        return {
            "success": True,
            "url": relative_url,
            "filename": file_id,
            "size_bytes": len(image_bytes)
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Gagal mengunggah gambar: {str(e)}")


@router.post("/image/file")
async def upload_image_multipart(file: UploadFile = File(...)):
    """
    Accepts multipart/form-data image upload and saves to local disk.
    """
    try:
        ext = file.filename.split(".")[-1].lower() if "." in file.filename else "webp"
        if ext not in ["jpg", "jpeg", "png", "webp", "gif"]:
            ext = "webp"

        file_id = f"img_{int(time.time())}_{uuid.uuid4().hex[:8]}.{ext}"
        file_path = os.path.join(UPLOAD_DIR, file_id)

        content = await file.read()
        with open(file_path, "wb") as f:
            f.write(content)

        relative_url = f"/uploads/images/{file_id}"
        return {
            "success": True,
            "url": relative_url,
            "filename": file_id,
            "size_bytes": len(content)
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Gagal mengunggah gambar: {str(e)}")
