import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistorialTareasService } from './historial_tareas.service';
import { CreateHistorialTareaDto } from './dto/create-historial_tarea.dto';
import { UpdateHistorialTareaDto } from './dto/update-historial_tarea.dto';

@Controller('historial-tareas')
export class HistorialTareasController {
  constructor(private readonly historialTareasService: HistorialTareasService) {}

  @Post()
  create(@Body() body:any) {
    return this.historialTareasService.create(body);
  }

  @Get()
  findAll() {
    return this.historialTareasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historialTareasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body:any) {
    return {
      "exito": true,
      "mensaje": "Historial de tarea actualizado exitosamente",
      "id": id,
      "data": this.historialTareasService.update(+id, body)
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historialTareasService.remove(+id);
  }
}
