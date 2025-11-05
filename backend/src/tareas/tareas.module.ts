import { Module } from "@nestjs/common";
import { TareasService } from "./tareas.service";
import { TareasController } from "./tareas.controller";
import { Prisma } from "@prisma/client";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [TareasController],
  providers: [TareasService],
})
export class TareasModule {}
