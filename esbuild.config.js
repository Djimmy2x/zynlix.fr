import { build } from 'esbuild';

await build({
  entryPoints: ['server/index.ts'],
  bundle: true,
  platform: 'node',
  format: 'esm',
  outdir: 'dist',
  external: [
    // Dependencies
    'connect-pg-simple',
    'express-session',
    'passport',
    'passport-local',
    'pg',
    'drizzle-orm',
    'bcrypt',
    'express',
    'cors',
    'helmet',
    'dotenv',
    // Problematic packages
    '@babel/*',
    'lightningcss',
    'esbuild',
    'vite',
    'typescript',
    'tsx',
    // React and frontend packages
    'react',
    'react-dom',
    '@radix-ui/*',
    '@tanstack/*',
    'framer-motion',
    'lucide-react',
    'wouter',
    'tailwindcss',
    'tailwindcss-animate',
    'class-variance-authority',
    'clsx',
    'tailwind-merge',
    // Additional problematic modules
    'ws',
    'bufferutil',
    'utf-8-validate'
  ],
  define: {
    'process.env.NODE_ENV': '"development"'
  },
  logLevel: 'info',
  sourcemap: true
}); 