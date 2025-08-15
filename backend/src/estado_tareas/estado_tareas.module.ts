import { Module } from '@nestjs/common';
import { EstadoTareasService } from './estado_tareas.service';
import { EstadoTareasController } from './estado_tareas.controller';

@Module({
  controllers: [EstadoTareasController],
  providers: [EstadoTareasService],
})
export class EstadoTareasModule {}
