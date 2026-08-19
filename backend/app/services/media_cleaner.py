import os
import time
import logging
import asyncio

logger = logging.getLogger(__name__)

UPLOAD_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "uploads", "images")


def prune_old_uploaded_images(max_age_days: int = 14) -> int:
    """
    Scans the uploads/images directory and deletes images older than max_age_days.
    Returns the number of deleted files.
    """
    if not os.path.exists(UPLOAD_DIR):
        return 0

    now = time.time()
    max_age_seconds = max_age_days * 86400
    deleted_count = 0
    total_freed_bytes = 0

    try:
        for fname in os.listdir(UPLOAD_DIR):
            fpath = os.path.join(UPLOAD_DIR, fname)
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
                    logger.warning(f"Failed to remove expired image {fpath}: {ex}")

        if deleted_count > 0:
            logger.info(
                f"[Auto-Prune] Deleted {deleted_count} expired images (> {max_age_days} days). "
                f"Freed {total_freed_bytes / (1024 * 1024):.2f} MB disk space."
            )
    except Exception as e:
        logger.error(f"[Auto-Prune] Error during image pruning: {e}")

    return deleted_count


async def periodic_prune_task(interval_hours: int = 24, max_age_days: int = 14):
    """
    Runs image pruning periodically in the background.
    """
    while True:
        try:
            prune_old_uploaded_images(max_age_days=max_age_days)
        except Exception as e:
            logger.error(f"[Auto-Prune Task] Periodic error: {e}")
        await asyncio.sleep(interval_hours * 3600)
