import { Module } from "@nestjs/common";
import { PrioridadTareasService } from "./prioridad_tareas.service";
import { PrioridadTareasController } from "./prioridad_tareas.controller";
import { Prisma } from "@prisma/client";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [PrioridadTareasController],
  providers: [PrioridadTareasService],
})
export class PrioridadTareasModule {}
