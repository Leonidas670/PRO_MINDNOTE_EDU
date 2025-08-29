import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PreferenciasService } from './preferencias.service';
import { CreatePreferenciaDto } from './dto/create-preferencia.dto';
import { UpdatePreferenciaDto } from './dto/update-preferencia.dto';

@Controller('preferencias')
export class PreferenciasController {
  constructor(private readonly preferenciasService: PreferenciasService) {}

  @Post()
  create(@Body() body:any) {
    return this.preferenciasService.create(body);
  }

  @Get()
  findAll() {
    return this.preferenciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.preferenciasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      "exito" : true,
      "mensaje": "Preferencia actualizada",
      "data": this.preferenciasService.update(+id, body)
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.preferenciasService.remove(+id);
  }
}
