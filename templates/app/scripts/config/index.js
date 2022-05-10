import env from '../../../config/env';

export const HOST = env.host;

export const isDev = process.env.NODE_ENV === 'development';
export const isProd = process.env.NODE_ENV === 'production';
export const isMP = !!process.env.isMiniprogram;
