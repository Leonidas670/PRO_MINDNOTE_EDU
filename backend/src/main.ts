// mindnote/backend/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { ValidationPipe } from '@nestjs/common';

const expressApp = express();
const adapter = new ExpressAdapter(expressApp);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, adapter);

  // 🔒 Lista de orígenes permitidos
  const allowedOrigins = [
    'https://kalonitinere.site',
    'https://www.kalonitinere.site',
    'https://api.kalonitinere.site',
    'http://localhost:5173'
  ];

  // ✅ Middleware manual para preflight (antes del CORS de Nest)
  expressApp.use((req, res, next) => {
    const origin = req.headers.origin as string | undefined;
    if (origin && allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Vary', 'Origin');
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
      );
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, X-Requested-With'
      );
    }

    // Si es preflight (OPTIONS), responde sin pasar a Nest
    if (req.method === 'OPTIONS') {
      return res.status(204).end();
    }

    next();
  });

  // ⚙️ CORS de NestJS (respaldo)
  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
  });

  // 🌐 Prefijo global
  app.setGlobalPrefix('api');

  // ✅ Validación global
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // 🧩 No usar app.listen() en Vercel
  await app.init();
}

bootstrap();

export default expressApp;
