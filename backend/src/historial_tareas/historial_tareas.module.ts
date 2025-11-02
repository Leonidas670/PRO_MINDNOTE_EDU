import { Module } from '@nestjs/common';
import { HistorialTareasService } from './historial_tareas.service';
import { HistorialTareasController } from './historial_tareas.controller';
import { Prisma } from 'generated/prisma';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [HistorialTareasController],
  providers: [HistorialTareasService],
})
export class HistorialTareasModule {}
