import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrefenciasService } from './prefencias.service';
import { CreatePrefenciaDto } from './dto/create-prefencia.dto';
import { UpdatePrefenciaDto } from './dto/update-prefencia.dto';

@Controller('prefencias')
export class PrefenciasController {
  constructor(private readonly prefenciasService: PrefenciasService) {}

  @Post()
  create(@Body() createPrefenciaDto: CreatePrefenciaDto) {
    return this.prefenciasService.create(createPrefenciaDto);
  }

  @Get()
  findAll() {
    return this.prefenciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prefenciasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrefenciaDto: UpdatePrefenciaDto) {
    return this.prefenciasService.update(+id, updatePrefenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prefenciasService.remove(+id);
  }
}
