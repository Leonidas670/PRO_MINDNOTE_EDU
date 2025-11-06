// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import type { Request, Response, NextFunction } from 'express';
import { ValidationPipe } from '@nestjs/common';

const expressApp = express();
const adapter = new ExpressAdapter(expressApp);

// ✅ Solución definitiva: forzamos string seguro
const rawOrigins: string =
  typeof process.env.ALLOWED_ORIGINS === 'string'
    ? process.env.ALLOWED_ORIGINS
    : '';

const ALLOWED_ORIGINS = rawOrigins
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

const DEFAULT_ALLOWED = [
  'https://mindnoteedu.site',
  'https://www.mindnoteedu.site',
  'http://localhost:5173',
  'http://localhost:3000',
];

const ORIGINS = ALLOWED_ORIGINS.length ? ALLOWED_ORIGINS : DEFAULT_ALLOWED;

async function bootstrap() {
  // --- Preflight y CORS básico ANTES de Nest ---
  expressApp.use((req: Request, res: Response, next: NextFunction) => {
    const origin = req.headers.origin as string | undefined;
    const allow = !!origin && ORIGINS.includes(origin);

    res.setHeader('Vary', 'Origin');

    if (allow && origin) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      // Si luego usas cookies/sesiones cross-site:
      // res.setHeader('Access-Control-Allow-Credentials', 'true');
    } else {
      // Para clientes sin Origin (curl, healthchecks)
      res.setHeader('Access-Control-Allow-Origin', '*');
    }

    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
    );
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, X-Requested-With'
    );

    if (req.method === 'OPTIONS') {
      return res.status(204).end();
    }
    next();
  });

  const app = await NestFactory.create(AppModule, adapter);

  // --- CORS de Nest como respaldo ---
  app.enableCors({
    origin: (
      origin: string | undefined,
      cb: (err: Error | null, allow?: boolean) => void
    ) => {
      if (!origin) return cb(null, true); // permitir clientes sin origin (curl, SSR, etc.)
      if (ORIGINS.includes(origin)) return cb(null, true);
      return cb(null, false);
    },
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: false, // cambia a true si usas cookies/sesiones
    optionsSuccessStatus: 204,
  });

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.init();
}

bootstrap();

export default expressApp;
