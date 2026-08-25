// RuangTI PM2 Process Manager — backend + frontend with auto-restart.
// Usage:
//   pm2 start ecosystem.config.js
//   pm2 save
//   pm2 status
//   pm2 logs ruangti-backend
//
// Backend runs through run_backend.py wrapper (uv interpreter, unbuffered)
// so PM2 tracks a single stable python.exe process instead of guessing
// uvicorn's reloader children. Frontend: next start (production build).
module.exports = {
  apps: [
    {
      name: "ruangti-backend",
      script: "run_backend.py",
      cwd: __dirname,
      interpreter: "python",
      // Restart policy: crash => immediate restart; 4 consecutive unstable
      // restarts < 10s apart => backoff, stop after 8 tries (fail loudly).
      autorestart: true,
      max_restarts: 8,
      min_uptime: "15s",
      restart_delay: 3000,
      exp_backoff_restart_delay: 250,
      max_memory_restart: "1G",
      kill_timeout: 8000,
      out_file: "./backend/logs/pm2-backend-out.log",
      error_file: "./backend/logs/pm2-backend-err.log",
      merge_logs: true,
      time: true,
    },
    {
      name: "ruangti-frontend",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3005 -H 0.0.0.0",
      cwd: __dirname,
      autorestart: true,
      max_restarts: 8,
      min_uptime: "15s",
      restart_delay: 3000,
      max_memory_restart: "1G",
      out_file: "./logs/pm2-frontend-out.log",
      error_file: "./logs/pm2-frontend-err.log",
      time: true,
    },
  ],
};
