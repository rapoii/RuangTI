# RuangTI backend launcher for PM2.
# PM2 needs ONE stable child process to supervise. Direct uvicorn from uv's
# python made PM2 track the wrong PID (zombie/exit-127 pattern). NOTE:
# os.execv is WRONG here on Windows (new process gets a NEW PID -> the wrapper
# appears to exit -> PM2 restart storm). Correct design: this wrapper stays
# alive as the parent of the uvicorn child and mirrors its exit code.
# PM2 stop uses tree-kill (taskkill /T /F) so the child dies with the parent.
import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
BACKEND = os.path.join(ROOT, "backend")
def main():
    interpreter = sys.executable
    os.chdir(BACKEND)
    cmd = [
        interpreter, "-u", "-m", "uvicorn", "app.main:app",
        "--host", "127.0.0.1", "--port", "8000",
    ]
    # No CREATE_NEW_PROCESS_GROUP so PM2's Ctrl-C/kill reaches the child too.
    proc = subprocess.Popen(cmd, cwd=BACKEND)
    try:
        return proc.wait()
    except KeyboardInterrupt:
        proc.terminate()
        return 0


if __name__ == "__main__":
    sys.exit(main())
