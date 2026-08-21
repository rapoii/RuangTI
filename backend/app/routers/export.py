import os
import re
import logging
from typing import Dict, Any, Optional, List
from fastapi import APIRouter, HTTPException, BackgroundTasks
from fastapi.responses import FileResponse
from pydantic import BaseModel

from app.services.file_generator import (
    generate_excel_file,
    generate_docx_file,
    generate_pptx_file,
    generate_pdf_file,
    GENERATED_FILES_DIR,
)

logger = logging.getLogger("RuangTI.ExportRouter")

router = APIRouter(prefix="/api/export", tags=["Export"])

class ExportPayload(BaseModel):
    file_type: str  # "excel" | "docx" | "pptx" | "pdf"
    filename: str
    title: Optional[str] = "Dokumen RuangTI"
    subtitle: Optional[str] = None
    headers: Optional[List[str]] = None
    rows: Optional[List[List[Any]]] = None
    sections: Optional[List[Dict[str, Any]]] = None
    slides: Optional[List[Dict[str, Any]]] = None

@router.post("/generate")
async def generate_file_endpoint(payload: ExportPayload):
    """Generates a binary file on disk and returns the download handle."""
    file_type = payload.file_type.lower().strip()
    filename = payload.filename or f"RuangTI_Document.{file_type}"

    try:
        if file_type in ["excel", "xlsx", "csv"]:
            file_path = generate_excel_file(
                filename=filename,
                title=payload.title or "Tabel Data RuangTI",
                headers=payload.headers or [],
                rows=payload.rows or []
            )
        elif file_type in ["word", "docx", "doc"]:
            file_path = generate_docx_file(
                filename=filename,
                title=payload.title or "Dokumen RuangTI",
                sections=payload.sections or []
            )
        elif file_type in ["powerpoint", "pptx", "ppt", "presentation"]:
            file_path = generate_pptx_file(
                filename=filename,
                title=payload.title or "Presentasi RuangTI",
                subtitle=payload.subtitle or "Spesialis Teknik Industri & Rekayasa Sistem",
                slides_data=payload.slides or []
            )
        elif file_type in ["pdf"]:
            file_path = generate_pdf_file(
                filename=filename,
                title=payload.title or "Laporan Resmi RuangTI",
                sections=payload.sections or []
            )
        else:
            raise HTTPException(status_code=400, detail=f"Format file '{file_type}' belum didukung.")

        base_name = os.path.basename(file_path)
        size_bytes = os.path.getsize(file_path)

        return {
            "success": True,
            "filename": filename,
            "saved_file": base_name,
            "file_type": file_type,
            "size_bytes": size_bytes,
            "download_url": f"/api/export/download/{base_name}"
        }
    except Exception as e:
        logger.error(f"Error generating export file: {e}")
        raise HTTPException(status_code=500, detail=f"Gagal membuat file: {str(e)}")

@router.get("/download/{saved_filename}")
async def download_file_endpoint(saved_filename: str):
    """Direct binary download endpoint."""
    # Prevent path traversal attacks
    safe_name = os.path.basename(saved_filename)
    file_path = os.path.join(GENERATED_FILES_DIR, safe_name)

    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="Berkas tidak ditemukan atau telah kedaluwarsa.")

    # Determine original filename by stripping uuid prefix
    clean_download_name = re.sub(r'^[a-f0-9]{8}_', '', safe_name)

    # Detect media type
    ext = safe_name.split(".")[-1].lower()
    media_types = {
        "xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "pdf": "application/pdf",
    }
    media_type = media_types.get(ext, "application/octet-stream")

    return FileResponse(
        path=file_path,
        media_type=media_type,
        filename=clean_download_name
    )
