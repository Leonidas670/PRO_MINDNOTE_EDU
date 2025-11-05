import { Module } from "@nestjs/common";
import { NotificacionesService } from "./notificaciones.service";
import { NotificacionesController } from "./notificaciones.controller";
import { Prisma } from "@prisma/client";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [NotificacionesController],
  providers: [NotificacionesService],
})
export class NotificacionesModule {}
