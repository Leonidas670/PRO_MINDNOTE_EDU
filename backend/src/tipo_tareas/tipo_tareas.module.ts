import { Module } from '@nestjs/common';
import { TipoTareasService } from './tipo_tareas.service';
import { TipoTareasController } from './tipo_tareas.controller';

@Module({
  controllers: [TipoTareasController],
  providers: [TipoTareasService],
})
export class TipoTareasModule {}
