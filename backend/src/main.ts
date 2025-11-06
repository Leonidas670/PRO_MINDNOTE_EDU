// mindnote/backend/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { ValidationPipe } from '@nestjs/common';

const expressApp = express();
const adapter = new ExpressAdapter(expressApp);

// === ORÍGENES PERMITIDOS ===
// Ajusta esta lista si usas otro subdominio de Azure o ambientes de prueba.
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS ?? '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

// Defaults pensados para tu escenario:
const DEFAULT_ALLOWED = [
  'https://mindnoteedu.site',
  'https://www.mindnoteedu.site',
  'http://localhost:5173',
  'http://localhost:3000'
];

const ORIGINS = ALLOWED_ORIGINS.length ? ALLOWED_ORIGINS : DEFAULT_ALLOWED;

async function bootstrap() {
  // --- Preflight y CORS básico ANTES de Nest (serverless-friendly) ---
  expressApp.use((req, res, next) => {
    const origin = req.headers.origin as string | undefined;
    const allow = origin && ORIGINS.includes(origin);

    // Si quieres habilitar cookies/sesiones entre dominios:
    // - pon credentials: true en enableCors (abajo)
    // - aquí usa el origin específico (no "*")
    // - agrega 'Access-Control-Allow-Credentials': 'true'
    // Por ahora dejamos sin credenciales.
    res.setHeader('Vary', 'Origin');

    if (allow) {
      res.setHeader('Access-Control-Allow-Origin', origin as string);
    } else {
      // Para requests sin Origin (p.ej., curl, healthchecks) no bloqueamos
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
    // Si algún día usas cookies:
    // res.setHeader('Access-Control-Allow-Credentials', 'true');

    if (req.method === 'OPTIONS') {
      return res.status(204).end();
    }
    next();
  });

  const app = await NestFactory.create(AppModule, adapter);

  // --- CORS de Nest como respaldo (mismas reglas) ---
  app.enableCors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true); // allow non-browser clients
      if (ORIGINS.includes(origin)) return cb(null, true);
      return cb(null, false);
    },
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: false, // si usas cookies/sesiones, cambia a true y quita '*' en el preflight
    optionsSuccessStatus: 204
  });

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.init();
}

bootstrap();

export default expressApp;
