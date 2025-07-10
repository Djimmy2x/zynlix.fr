import { build } from 'esbuild';

await build({
  entryPoints: ['server/index.ts'],
  bundle: true,
  platform: 'node',
  format: 'esm',
  outdir: 'dist',
  external: [
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
    'dotenv'
  ],
  define: {
    'process.env.NODE_ENV': '"production"'
  }
}); 