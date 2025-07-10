export default {
  apps: [{
    name: 'zynlix-app',
    script: './dist/index.js',
    cwd: '/home/zynlix/zynlix',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}; 