import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistorialTareasService } from './historial_tareas.service';
import { CreateHistorialTareaDto } from './dto/create-historial_tarea.dto';
import { UpdateHistorialTareaDto } from './dto/update-historial_tarea.dto';

@Controller('historial-tareas')
export class HistorialTareasController {
  constructor(private readonly historialTareasService: HistorialTareasService) {}

  @Post()
  create(@Body() createHistorialTareaDto: CreateHistorialTareaDto) {
    return this.historialTareasService.create(createHistorialTareaDto);
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
  update(@Param('id') id: string, @Body() updateHistorialTareaDto: UpdateHistorialTareaDto) {
    return this.historialTareasService.update(+id, updateHistorialTareaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historialTareasService.remove(+id);
  }
}
