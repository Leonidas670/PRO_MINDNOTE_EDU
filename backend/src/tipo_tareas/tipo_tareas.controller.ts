import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoTareasService } from './tipo_tareas.service';
import { CreateTipoTareaDto } from './dto/create-tipo_tarea.dto';
import { UpdateTipoTareaDto } from './dto/update-tipo_tarea.dto';

@Controller('tipo-tareas')
export class TipoTareasController {
  constructor(private readonly tipoTareasService: TipoTareasService) {}

  @Post()
  create(@Body() body:any) {
    return this.tipoTareasService.create(body);
  }

  @Get()
  findAll() {
    return this.tipoTareasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoTareasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body:any) {
   return {
    "exito" : true,
    "mensaje": "Tipo de tarea actualizada con exito",
    "id": id,
    "data": this.tipoTareasService.update(+id, body)
   }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoTareasService.remove(+id);
  }
}
