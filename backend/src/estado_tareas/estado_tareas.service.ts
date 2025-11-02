import { Body, Injectable } from '@nestjs/common';
import { CreateEstadoTareaDto } from './dto/create-estado_tarea.dto';
import { UpdateEstadoTareaDto } from './dto/update-estado_tarea.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EstadoTareasService {

  constructor(
    private prisma: PrismaService
  ) {}

  async create(body:any) {
    return await this.prisma.estadoTarea.create({
      data: body
    });
  }

  async findAll() {
    return await this.prisma.estadoTarea.findMany({
      orderBy: {estado_id: 'desc'}
    });
  }

  async findOne(id: number) {
    return await this.prisma.estadoTarea.findFirst({
      where: {estado_id: id}
    });
  }

  async update(id: number, body:any) { 
    return await this.prisma.estadoTarea.update({
      where: {estado_id: id},
      data: body
    });
  }

  async remove(id: number) {
    await this.prisma.estadoTarea.delete({
      where: {estado_id: id}
    });
    return{
      "exito": true,
      "mensaje": "Estado de tarea eliminado exitosamente",
      "id": id
    }
  }
}
