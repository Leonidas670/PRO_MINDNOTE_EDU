import { Injectable } from '@nestjs/common';
import { CreatePrioridadTareaDto } from './dto/create-prioridad_tarea.dto';
import { UpdatePrioridadTareaDto } from './dto/update-prioridad_tarea.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrioridadTareasService {

  constructor(
    private prisma: PrismaService
  ) {}

  async create(body:any) {
    return await this.prisma.prioridadTarea.create({
      data: body
  })
 }

  async findAll() {
    return await this.prisma.prioridadTarea.findMany({
      orderBy: {prioridad_id: 'desc'}
    });
  }

  async findOne(id: number) {
    return await this.prisma.prioridadTarea.findFirst({
      where: {prioridad_id: id}
    });
  }

  async update(id: number, body:any) {
    return await this.prisma.prioridadTarea.update({
      where: {prioridad_id: id},
      data: body
    });
  }

  async remove(id: number) {
    await this.prisma.prioridadTarea.delete({
      where: {prioridad_id: id}
    });
    return {
      "exito": true,
      "mensaje": "Prioridad de tarea eliminada exitosamente",
      "id": id
    }
  }
}
