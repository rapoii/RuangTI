import os
import time
import logging
import asyncio

logger = logging.getLogger(__name__)

ROOT_UPLOAD_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "uploads")
IMAGE_UPLOAD_DIR = os.path.join(ROOT_UPLOAD_DIR, "images")
DOC_UPLOAD_DIR = os.path.join(ROOT_UPLOAD_DIR, "documents")


def prune_directory(target_dir: str, max_age_days: int = 14) -> tuple[int, int]:
    """Scans target_dir and deletes files older than max_age_days."""
    if not os.path.exists(target_dir):
        return 0, 0

    now = time.time()
    max_age_seconds = max_age_days * 86400
    deleted_count = 0
    total_freed_bytes = 0

    try:
        for fname in os.listdir(target_dir):
            fpath = os.path.join(target_dir, fname)
            if not os.path.isfile(fpath):
                continue

            file_mtime = os.path.getmtime(fpath)
            file_age = now - file_mtime

            if file_age > max_age_seconds:
                try:
                    fsize = os.path.getsize(fpath)
                    os.remove(fpath)
                    deleted_count += 1
                    total_freed_bytes += fsize
                except Exception as ex:
                    logger.warning(f"Failed to remove expired file {fpath}: {ex}")
    except Exception as e:
        logger.error(f"[Auto-Prune] Error during pruning in {target_dir}: {e}")

    return deleted_count, total_freed_bytes


def prune_old_uploaded_images(max_age_days: int = 14) -> int:
    """
    Scans uploads/images and uploads/documents directories and deletes files older than max_age_days.
    Returns total deleted files count.
    """
    img_deleted, img_freed = prune_directory(IMAGE_UPLOAD_DIR, max_age_days)
    doc_deleted, doc_freed = prune_directory(DOC_UPLOAD_DIR, max_age_days)
    
    total_deleted = img_deleted + doc_deleted
    total_freed = img_freed + doc_freed

    if total_deleted > 0:
        logger.info(
            f"[Auto-Prune] Deleted {total_deleted} expired uploads ({img_deleted} images, {doc_deleted} documents) (> {max_age_days} days). "
            f"Freed {total_freed / (1024 * 1024):.2f} MB disk space."
        )

    return total_deleted


async def periodic_prune_task(interval_hours: int = 24, max_age_days: int = 14):
    """
    Runs image and document pruning periodically in the background.
    """
    while True:
        try:
            prune_old_uploaded_images(max_age_days=max_age_days)
        except Exception as e:
            logger.error(f"[Auto-Prune Task] Periodic error: {e}")
        await asyncio.sleep(interval_hours * 3600)
