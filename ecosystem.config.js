export default {
  apps: [{
    name: 'zynlix-app',
    script: 'dist/index.js',
    cwd: '/home/zynlix/zynlix',
    user: 'zynlix',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/home/zynlix/zynlix/logs/err.log',
    out_file: '/home/zynlix/zynlix/logs/out.log',
    log_file: '/home/zynlix/zynlix/logs/combined.log',
    time: true
  }]
}; 