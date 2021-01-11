import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export const constants = {
  PUBLIC_KEY: process.env.PUBLIC_KEY,
  PORT: process.env.PORT ?? '8000',
};
