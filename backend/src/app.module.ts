import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareasModule } from './tareas/tareas.module';
import { CategoriasModule } from './categorias/categorias.module';
import { EstadoTareasModule } from './estado_tareas/estado_tareas.module';
import { HistorialTareasModule } from './historial_tareas/historial_tareas.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { PrefenciasModule } from './prefencias/prefencias.module';
import { PrioridadTareasModule } from './prioridad_tareas/prioridad_tareas.module';
import { TipoTareasModule } from './tipo_tareas/tipo_tareas.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [UsuariosModule, TareasModule, CategoriasModule, EstadoTareasModule, HistorialTareasModule, NotificacionesModule, PrefenciasModule, PrioridadTareasModule, TipoTareasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
