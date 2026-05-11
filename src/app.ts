import Fastify, { FastifyServerOptions } from 'fastify';

export function buildApp(options: FastifyServerOptions = {}) {
  const APP_1 = Fastify({
    logger: options.logger ?? true,
    ...options
  });

  APP_1.get('/', async () => {
    return {
      message: 'CI/CD Lab Fastify app is running',
      version: process.env.APP_VERSION || 'dev';
    };
  });

  APP_1.get('/health', async () => {
    return {
      status: 'ok'
    };
  });

  return APP_1;
}
