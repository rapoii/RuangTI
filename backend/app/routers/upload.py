import os
import uuid
import base64
import time
import re
from fastapi import APIRouter, HTTPException, UploadFile, File, Request, Header
from pydantic import BaseModel
from typing import Optional

router = APIRouter(prefix="/api/upload", tags=["Upload"])

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
IMAGE_UPLOAD_DIR = os.path.join(ROOT_DIR, "uploads", "images")
DOC_UPLOAD_DIR = os.path.join(ROOT_DIR, "uploads", "documents")

os.makedirs(IMAGE_UPLOAD_DIR, exist_ok=True)
os.makedirs(DOC_UPLOAD_DIR, exist_ok=True)


class Base64UploadRequest(BaseModel):
    image_data: str
    filename: Optional[str] = None


@router.post("/image")
async def upload_image_base64(request: Request, payload: Base64UploadRequest):
    """
    Saves a base64 encoded image to disk as a compact WebP/JPEG file
    and returns a short relative URL (e.g. /uploads/images/uuid.webp).
    """
    try:
        # Require auth for image uploads (fix #98)
        auth = request.headers.get("authorization", "")
        if not auth or not auth.strip():
            raise HTTPException(status_code=401, detail="Authentication required untuk upload gambar")
        raw_data = payload.image_data
        if "," in raw_data:
            header, base64_str = raw_data.split(",", 1)
            ext = "webp" if "webp" in header else "jpg" if "jpeg" in header or "jpg" in header else "png"
        else:
            base64_str = raw_data
            ext = "webp"

        image_bytes = base64.b64decode(base64_str)
        # Enforce 10MB limit on decoded bytes (Round 18: b64 bomb DoS)
        if len(image_bytes) > 10 * 1024 * 1024:
            raise HTTPException(status_code=413, detail="Ukuran gambar melebihi batas maksimum 10MB.")
        # Reject non-image content (polyglot PHP/SVG/script in data URI — Round 18)
        low_img = image_bytes[:8192].lower()
        if (b"<?php" in low_img or b"<?=" in low_img or b"<svg" in low_img
                or b"<script" in low_img or b"onload=" in low_img or b"onerror=" in low_img):
            raise HTTPException(status_code=422, detail="Konten gambar mengandung kode berbahaya dan ditolak")
        file_id = f"img_{int(time.time())}_{uuid.uuid4().hex[:8]}.{ext}"
        file_path = os.path.join(IMAGE_UPLOAD_DIR, file_id)

        with open(file_path, "wb") as f:
            f.write(image_bytes)

        relative_url = f"/uploads/images/{file_id}"
        return {
            "success": True,
            "url": relative_url,
            "filename": file_id,
            "size_bytes": len(image_bytes)
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=400, detail="Gagal mengunggah gambar")


@router.post("/image/file")
async def upload_image_multipart(request: Request, file: UploadFile = File(...)):
    """
    Accepts multipart/form-data image upload and saves to local disk.
    """
    try:
        auth = request.headers.get("authorization", "")
        if not auth or not auth.strip():
            raise HTTPException(status_code=401, detail="Authentication required untuk upload gambar")
        ext = file.filename.split(".")[-1].lower() if "." in file.filename else "webp"
        if ext in ["svg", "html", "htm"]:
            raise HTTPException(status_code=415, detail="Tipe berkas SVG/HTML tidak diizinkan")
        if ext not in ["jpg", "jpeg", "png", "webp", "gif", "bmp"]:
            ext = "webp"

        file_id = f"img_{int(time.time())}_{uuid.uuid4().hex[:8]}.{ext}"
        file_path = os.path.join(IMAGE_UPLOAD_DIR, file_id)

        content = await file.read()
        if len(content) > 10 * 1024 * 1024:
            raise HTTPException(status_code=413, detail="Ukuran berkas melebihi batas maksimum 10MB.")
        with open(file_path, "wb") as f:
            f.write(content)

        relative_url = f"/uploads/images/{file_id}"
        return {
            "success": True,
            "url": relative_url,
            "filename": file_id,
            "size_bytes": len(content)
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=400, detail="Gagal mengunggah gambar")


@router.post("/document")
async def upload_document(request: Request, file: UploadFile = File(...)):
    """
    Accepts any document, spreadsheet, code, or archive file (zip, docx, xlsx, py, etc.)
    and stores it locally under uploads/documents/. Returns compact metadata without bloating DB.
    """
    try:
        original_name = file.filename or "lampiran_dokumen"
        # Require auth for uploads (fix #98)
        auth = request.headers.get("authorization", "")
        if not auth or not auth.strip():
            raise HTTPException(status_code=401, detail="Authentication required untuk upload dokumen")
        # Block SVG / HTML XSS uploads (fix #95)
        ctype = (file.content_type or "").lower()
        if "svg" in ctype or "html" in ctype:
            raise HTTPException(status_code=415, detail="Tipe berkas SVG/HTML tidak diizinkan (XSS risk)")
        # Decode URL-encoded filename before ext checks (bypass %2e = .)
        import urllib.parse
        decoded_name = urllib.parse.unquote(original_name)
        if "%00" in original_name.lower() or "%2e" in original_name.lower() or "\x00" in original_name:
            raise HTTPException(status_code=415, detail="Nama berkas mengandung karakter terlarang")
        ext_lower = (decoded_name.split(".")[-1].lower() if "." in decoded_name else "")
        if ext_lower in ("svg", "html", "htm", "xhtml"):
            raise HTTPException(status_code=415, detail="Ekstensi .svg/.html tidak diizinkan")
        # Block PHP / server-side executable extensions (RCE prevention — Round 16)
        BLOCKED_EXTS = {"php","php3","php4","php5","php7","phtml","phar","pht","htaccess","sh","pl","cgi","py","jsp","asp","aspx"}
        # Check all dot-separated parts for blocked extensions (catches image.jpg.php + %2e bypass)
        name_for_ext = decoded_name
        all_parts = [p.lower() for p in name_for_ext.split(".")[1:]]
        for part in all_parts:
            # strip url remnants like php? or php%00
            clean_part = re.sub(r'[^a-z0-9]', '', part)
            if clean_part in BLOCKED_EXTS or part in BLOCKED_EXTS:
                raise HTTPException(status_code=415, detail=f"Ekstensi .{part} tidak diizinkan (executable block)")
        if ctype in ("application/x-php","application/x-httpd-php","text/x-php"):
            raise HTTPException(status_code=415, detail="MIME type PHP tidak diizinkan")
        safe_name = re.sub(r'[^a-zA-Z0-9_.-]', '_', original_name)
        ext = original_name.split(".")[-1].lower() if "." in original_name else "txt"
        
        file_id = f"doc_{int(time.time())}_{uuid.uuid4().hex[:8]}.{ext}"
        file_path = os.path.join(DOC_UPLOAD_DIR, file_id)
        
        content = await file.read()
        size_bytes = len(content)
        
        # Enforce 10MB limit (fix #97, was 50MB)
        if size_bytes > 10 * 1024 * 1024:
            raise HTTPException(status_code=413, detail="Ukuran berkas melebihi batas maksimum 10MB.")
        # Scan content for embedded script/svg XSS (fix #95)
        low = content[:8192].lower()
        if b"<?php" in low or b"<?= " in low or b"<?=" in low:
            raise HTTPException(status_code=422, detail="Konten berkas mengandung kode PHP dan ditolak")
        if b"<script" in low or b"onload" in low or b"onerror" in low or b"javascript:" in low:
            raise HTTPException(status_code=422, detail="Konten berkas mengandung script berbahaya dan ditolak")
            
        with open(file_path, "wb") as f:
            f.write(content)
            
        relative_url = f"/uploads/documents/{file_id}"
        
        return {
            "success": True,
            "id": file_id,
            "name": original_name,
            "safe_name": safe_name,
            "ext": ext,
            "size": size_bytes,
            "url": relative_url,
            "type": file.content_type or "application/octet-stream"
        }
    except HTTPException:
        raise
    except Exception as e:
        # Never leak absolute filesystem paths (fix #96)
        raise HTTPException(status_code=400, detail="Gagal mengunggah berkas dokumen")
