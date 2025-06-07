import type { Config } from 'drizzle-kit';
import { env } from './src/lib/env';

export default {
  schema: './src/lib/db/schema.new.ts',
  out: './src/lib/db/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: env.DATABASE_URL,
    ssl: env.NODE_ENV === 'production' ? {
      rejectUnauthorized: false
    } : false,
  },
  verbose: true,
  strict: true,
} satisfies Config;
