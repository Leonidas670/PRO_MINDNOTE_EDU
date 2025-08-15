import { Module } from '@nestjs/common';
import { PrioridadTareasService } from './prioridad_tareas.service';
import { PrioridadTareasController } from './prioridad_tareas.controller';

@Module({
  controllers: [PrioridadTareasController],
  providers: [PrioridadTareasService],
})
export class PrioridadTareasModule {}
