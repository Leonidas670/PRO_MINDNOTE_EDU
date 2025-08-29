import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrioridadTareasService } from './prioridad_tareas.service';
import { CreatePrioridadTareaDto } from './dto/create-prioridad_tarea.dto';
import { UpdatePrioridadTareaDto } from './dto/update-prioridad_tarea.dto';

@Controller('prioridad-tareas')
export class PrioridadTareasController {
  constructor(private readonly prioridadTareasService: PrioridadTareasService) {}

  @Post()
  create(@Body() body:any) {
    return this.prioridadTareasService.create(body);
  }

  @Get()
  findAll() {
    return this.prioridadTareasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prioridadTareasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body:any) {
    return {
      "exito": true,
      "mensaje": "Prioridad de tarea actualizada exitosamente",
      "id": id,
      "data": this.prioridadTareasService.update(+id, body)
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prioridadTareasService.remove(+id);
  }
}
