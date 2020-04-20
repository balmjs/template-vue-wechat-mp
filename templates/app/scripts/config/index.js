import env from '../../../config/env';

export const HOST = env.host;

export const isMP = process.env.isMiniprogram;

export const DEBUG = process.env.NODE_ENV !== 'production';
