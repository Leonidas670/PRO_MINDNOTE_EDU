import { Module } from '@nestjs/common';
import { HistorialTareasService } from './historial_tareas.service';
import { HistorialTareasController } from './historial_tareas.controller';

@Module({
  controllers: [HistorialTareasController],
  providers: [HistorialTareasService],
})
export class HistorialTareasModule {}
