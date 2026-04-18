import * as dotenv from 'dotenv';

dotenv.config();

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env variable: ${name}`);
  return value;
}

export const env = {
  baseURL: requireEnv('BASE_URL'),
  username: requireEnv('APP_USERNAME'),
  password: requireEnv('APP_PASSWORD'),
};