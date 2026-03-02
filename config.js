/**
 * Backend configuration.
 * Override with environment variables (e.g. .env or shell).
 */
const config = {
  port: Number(process.env.PORT) || 3000,

  database: {
    /** On Vercel, use /tmp (only writable dir). Data is ephemeral. For persistence use DATABASE_PATH with external storage. */
    path: process.env.DATABASE_PATH || (process.env.VERCEL ? '/tmp/app.db' : './data/app.db'),
    /** Enable WAL mode for better concurrent read performance */
    wal: process.env.DATABASE_WAL !== 'false',
  },
};

export default config;
