import { Module } from '@nestjs/common';
import { EstadoTareasService } from './estado_tareas.service';
import { EstadoTareasController } from './estado_tareas.controller';
import { Prisma } from 'generated/prisma';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EstadoTareasController],
  providers: [EstadoTareasService],
})
export class EstadoTareasModule {}
