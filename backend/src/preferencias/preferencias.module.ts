import { Module } from '@nestjs/common';
import { PreferenciasService } from './preferencias.service';
import { PreferenciasController } from './preferencias.controller';
import { Prisma } from 'generated/prisma';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PreferenciasController],
  providers: [PreferenciasService],
})
export class PreferenciasModule {}
