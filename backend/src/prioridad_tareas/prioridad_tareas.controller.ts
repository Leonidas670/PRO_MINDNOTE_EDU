import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrioridadTareasService } from './prioridad_tareas.service';
import { CreatePrioridadTareaDto } from './dto/create-prioridad_tarea.dto';
import { UpdatePrioridadTareaDto } from './dto/update-prioridad_tarea.dto';

@Controller('prioridad-tareas')
export class PrioridadTareasController {
  constructor(private readonly prioridadTareasService: PrioridadTareasService) {}

  @Post()
  create(@Body() createPrioridadTareaDto: CreatePrioridadTareaDto) {
    return this.prioridadTareasService.create(createPrioridadTareaDto);
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
  update(@Param('id') id: string, @Body() updatePrioridadTareaDto: UpdatePrioridadTareaDto) {
    return this.prioridadTareasService.update(+id, updatePrioridadTareaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prioridadTareasService.remove(+id);
  }
}
