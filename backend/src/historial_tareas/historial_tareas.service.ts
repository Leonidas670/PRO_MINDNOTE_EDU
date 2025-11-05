import { Injectable } from '@nestjs/common';
import { CreateHistorialTareaDto } from './dto/create-historial_tarea.dto';
import { UpdateHistorialTareaDto } from './dto/update-historial_tarea.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HistorialTareasService {
  constructor(private prisma: PrismaService)
{}
  async create(body:any) {
    return await this.prisma.historialTarea.create({
      data: body
    });
  }

  async findAll() {
    return await this.prisma.historialTarea.findMany({
      orderBy: {historial_id: 'desc'}
    }); 
  }

  async findOne(id: number) {
    return await this.prisma.historialTarea.findFirst({
      where: {historial_id: id}
    });
  }

  async update(id: number, body:any) {
    return await this.prisma.historialTarea.update({
      where: {historial_id: id},
      data: body 
  })
}

  async remove(id: number) {
    await this.prisma.historialTarea.delete({
      where: {historial_id: id}
    })
    return{
      "exito": true,
      "mensaje": "Historial de tarea eliminado exitosamente",
      "id": id 
    }
   }
}
