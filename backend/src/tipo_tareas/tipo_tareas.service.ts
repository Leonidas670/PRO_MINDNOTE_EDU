import { Injectable } from '@nestjs/common';
import { CreateTipoTareaDto } from './dto/create-tipo_tarea.dto';
import { UpdateTipoTareaDto } from './dto/update-tipo_tarea.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TipoTareasService {

  constructor(
    private prisma: PrismaService
  ) {}
  async create(body:any) {
    return await this.prisma.tipoTarea.create({
      data: body
    });
  }

  async findAll() {
    return await this.prisma.tipoTarea.findMany({
      orderBy:{ tipo_nombre: 'desc' }
    });
  }

  async findOne(id: number) {
    return await this.prisma.tipoTarea.findFirst({
      where: { tipo_id: id }
    });
  }

  async update(id: number, body:any) {
    return await this.prisma.tipoTarea.update({
      where: { tipo_id: id },
      data: body
    });
  }

  async remove(id: number) {
    await this.prisma.tipoTarea.delete({
      where: { tipo_id: id }
    });
    return {
      "exito": true,
      "mensaje": "Tipo de tarea eliminada con exito",
      "id": id
    };
  }
}
