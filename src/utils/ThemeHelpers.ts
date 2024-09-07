import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const getCurrentUrl = (): string => {
  return process.env.NEXT_PUBLIC_APP_URL
    || (process.env.VERCEL_ENV === 'production' && process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
    || (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`)
    || 'http://localhost:3000';
};

const useMerge = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

export { getCurrentUrl, useMerge };
