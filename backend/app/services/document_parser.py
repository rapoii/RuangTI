import os
import io
import zipfile
import csv
import logging
from typing import Dict, Any, Optional

logger = logging.getLogger("RuangTI.DocParser")

MAX_TEXT_CHAR_LIMIT = 40000  # Safe token budget for attached documents

def parse_text_file(file_path: str, max_chars: int = MAX_TEXT_CHAR_LIMIT) -> str:
    """Reads a plain text, code, json, yaml, sql, or markdown file."""
    try:
        with open(file_path, "r", encoding="utf-8", errors="replace") as f:
            content = f.read(max_chars)
        return content
    except Exception as e:
        logger.error(f"Error reading text file {file_path}: {e}")
        return f"[Gagal membaca file teks: {e}]"

def parse_docx_file(file_path: str, max_chars: int = MAX_TEXT_CHAR_LIMIT) -> str:
    """Extracts text, headings, and tables from Word (.docx) documents."""
    try:
        import docx
        doc = docx.Document(file_path)
        parts = []
        
        # Paragraphs
        for p in doc.paragraphs:
            text = p.text.strip()
            if text:
                if p.style.name.startswith("Heading"):
                    parts.append(f"\n### {text}\n")
                else:
                    parts.append(text)
                    
        # Tables
        for t_idx, table in enumerate(doc.tables, 1):
            parts.append(f"\n[Tabel {t_idx}]")
            for row in table.rows:
                row_vals = [c.text.strip().replace("\n", " ") for c in row.cells]
                parts.append("| " + " | ".join(row_vals) + " |")
                
        full_text = "\n".join(parts)
        return full_text[:max_chars]
    except Exception as e:
        logger.error(f"Error parsing docx {file_path}: {e}")
        return f"[Gagal mengekstrak dokumen Word: {e}]"

def parse_excel_file(file_path: str, max_chars: int = MAX_TEXT_CHAR_LIMIT) -> str:
    """Extracts sheet names, headers, and row samples from Excel (.xlsx) workbooks."""
    try:
        import openpyxl
        wb = openpyxl.load_workbook(file_path, data_only=True, read_only=True)
        parts = []
        
        for sheet_name in wb.sheetnames:
            ws = wb[sheet_name]
            parts.append(f"\n=== Sheet: {sheet_name} ===")
            
            # Read first 100 rows
            row_count = 0
            for row in ws.iter_rows(values_only=True):
                if row_count > 100:
                    parts.append("... [Baris data lainnya dipersingkat]")
                    break
                # Filter out all-None rows
                if any(v is not None for v in row):
                    row_vals = [str(v).strip() if v is not None else "" for v in row]
                    # Format as table row
                    parts.append("| " + " | ".join(row_vals[:20]) + " |")
                    row_count += 1
                    
        full_text = "\n".join(parts)
        return full_text[:max_chars]
    except Exception as e:
        logger.error(f"Error parsing excel {file_path}: {e}")
        return f"[Gagal mengekstrak data spreadsheet Excel: {e}]"

def parse_csv_file(file_path: str, max_chars: int = MAX_TEXT_CHAR_LIMIT) -> str:
    """Parses CSV text data with table formatting."""
    try:
        parts = []
        with open(file_path, "r", encoding="utf-8", errors="replace") as f:
            reader = csv.reader(f)
            for idx, row in enumerate(reader):
                if idx > 150:
                    parts.append("... [Baris CSV selanjutnya dipersingkat]")
                    break
                parts.append("| " + " | ".join(row[:20]) + " |")
        full_text = "\n".join(parts)
        return full_text[:max_chars]
    except Exception as e:
        logger.error(f"Error parsing CSV {file_path}: {e}")
        return f"[Gagal membaca file CSV: {e}]"

def parse_pdf_file(file_path: str, max_chars: int = MAX_TEXT_CHAR_LIMIT) -> str:
    """Extracts plain text from PDF documents using pypdf."""
    try:
        from pypdf import PdfReader
        reader = PdfReader(file_path)
        parts = []
        for page_idx, page in enumerate(reader.pages):
            text = page.extract_text()
            if text:
                parts.append(f"\n--- Halaman {page_idx + 1} ---\n{text.strip()}")
            if sum(len(p) for p in parts) >= max_chars:
                break
        full_text = "\n".join(parts)
        return full_text[:max_chars]
    except Exception as e:
        logger.error(f"Error parsing PDF {file_path}: {e}")
        return f"[Gagal membaca dokumen PDF: {e}]"

def parse_zip_file(file_path: str, max_chars: int = MAX_TEXT_CHAR_LIMIT) -> str:
    """Extracts file list tree and contents of key code/text files from a ZIP archive."""
    try:
        with zipfile.ZipFile(file_path, "r") as z:
            namelist = z.namelist()
            parts = [f"=== Struktur Berkas ZIP ({len(namelist)} file) ==="]
            
            # Show tree / files
            for name in namelist[:60]:
                parts.append(f"- {name}")
            if len(namelist) > 60:
                parts.append(f"... dan {len(namelist) - 60} file lainnya.")
                
            # Read first few key code / config / text files
            parts.append("\n=== Cuplikan Berkas Penting di Dalam ZIP ===")
            read_budget = max_chars - sum(len(p) for p in parts)
            
            for name in namelist:
                if read_budget <= 1000:
                    break
                ext = name.split(".")[-1].lower() if "." in name else ""
                if ext in ["py", "js", "ts", "tsx", "jsx", "json", "yaml", "yml", "md", "txt", "sql", "csv", "html", "css"]:
                    try:
                        with z.open(name) as zf:
                            content = zf.read(8000).decode("utf-8", errors="replace")
                            parts.append(f"\nFile: `{name}`:\n```{ext}\n{content}\n```")
                            read_budget -= len(content)
                    except Exception:
                        pass
                        
            full_text = "\n".join(parts)
            return full_text[:max_chars]
    except Exception as e:
        logger.error(f"Error parsing ZIP {file_path}: {e}")
        return f"[Gagal mengekstrak berkas arsip ZIP: {e}]"

def extract_document_content(file_path: str, original_filename: str) -> str:
    """Universal dispatcher to parse any supported document or code file."""
    if not os.path.exists(file_path):
        return f"[Berkas {original_filename} tidak ditemukan di server]"
        
    ext = original_filename.split(".")[-1].lower() if "." in original_filename else ""
    
    if ext in ["docx"]:
        parsed = parse_docx_file(file_path)
    elif ext in ["xlsx", "xls"]:
        parsed = parse_excel_file(file_path)
    elif ext in ["csv"]:
        parsed = parse_csv_file(file_path)
    elif ext in ["pdf"]:
        parsed = parse_pdf_file(file_path)
    elif ext in ["zip", "tar", "gz", "7z"]:
        parsed = parse_zip_file(file_path)
    elif ext in [
        "py", "js", "ts", "tsx", "jsx", "html", "css", "json", "yaml", "yml",
        "sql", "sh", "bash", "c", "cpp", "h", "hpp", "java", "kt", "rs",
        "go", "php", "rb", "r", "m", "txt", "md", "markdown", "env", "log"
    ]:
        content = parse_text_file(file_path)
        parsed = f"```{ext}\n{content}\n```"
    else:
        # Generic fallback
        content = parse_text_file(file_path)
        parsed = content if content else f"[Format berkas .{ext} disimpan sebagai lampiran biner]"
        
    return f"\n\n=== LAMPIRAN DOKUMEN/BERKAS: {original_filename} ===\n{parsed}\n"
