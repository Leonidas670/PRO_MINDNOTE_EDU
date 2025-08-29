import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadoTareasService } from './estado_tareas.service';
import { CreateEstadoTareaDto } from './dto/create-estado_tarea.dto';
import { UpdateEstadoTareaDto } from './dto/update-estado_tarea.dto';

@Controller('estado-tareas')
export class EstadoTareasController {
  constructor(private readonly estadoTareasService: EstadoTareasService) {}

  @Post()
  create(@Body() body:any) {
    return this.estadoTareasService.create(body);
  }

  @Get()
  findAll() {
    return this.estadoTareasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadoTareasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body:any) {
    return {
      "exito": true,
      "mensaje": "Estado de tarea actualizado exitosamente",
      "id": id,
      "data": this.estadoTareasService.update(+id, body)
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadoTareasService.remove(+id);
  }
}
