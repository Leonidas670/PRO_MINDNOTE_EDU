import { Module } from "@nestjs/common";
import { TipoTareasService } from "./tipo_tareas.service";
import { TipoTareasController } from "./tipo_tareas.controller";
import { Prisma } from "@prisma/client";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [TipoTareasController],
  providers: [TipoTareasService],
})
export class TipoTareasModule {}
