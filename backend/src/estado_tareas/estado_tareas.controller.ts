import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadoTareasService } from './estado_tareas.service';
import { CreateEstadoTareaDto } from './dto/create-estado_tarea.dto';
import { UpdateEstadoTareaDto } from './dto/update-estado_tarea.dto';

@Controller('estado-tareas')
export class EstadoTareasController {
  constructor(private readonly estadoTareasService: EstadoTareasService) {}

  @Post()
  create(@Body() createEstadoTareaDto: CreateEstadoTareaDto) {
    return this.estadoTareasService.create(createEstadoTareaDto);
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
  update(@Param('id') id: string, @Body() updateEstadoTareaDto: UpdateEstadoTareaDto) {
    return this.estadoTareasService.update(+id, updateEstadoTareaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadoTareasService.remove(+id);
  }
}
