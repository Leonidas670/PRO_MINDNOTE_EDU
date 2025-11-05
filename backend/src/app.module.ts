import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareasModule } from './tareas/tareas.module';
import { EstadoTareasModule } from './estado_tareas/estado_tareas.module';
import { HistorialTareasModule } from './historial_tareas/historial_tareas.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { PrioridadTareasModule } from './prioridad_tareas/prioridad_tareas.module';
import { TipoTareasModule } from './tipo_tareas/tipo_tareas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaModule } from './prisma/prisma.module';
import { LoginModule } from './login/login.module';


@Module({
  imports: [UsuariosModule, TareasModule, EstadoTareasModule, HistorialTareasModule, NotificacionesModule, PrioridadTareasModule, TipoTareasModule, PrismaModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
