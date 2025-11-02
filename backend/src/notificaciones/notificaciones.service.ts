import { Body, Injectable } from '@nestjs/common';
import { CreateNotificacioneDto } from './dto/create-notificacione.dto';
import { UpdateNotificacioneDto } from './dto/update-notificacione.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotificacionesService {

  constructor(
    private prisma: PrismaService
  ) {}
  async create(body:any) {
    return await this.prisma.notificacion.create({
      data: body
    });
  }

  async findAll() {
    return await this.prisma.notificacion.findMany({
      orderBy: {notificacion_id: 'desc'}
    });
  }

  async findOne(id: number) {
    return await this.prisma.notificacion.findFirst({
      where: {notificacion_id: id}
    });
  }

  async update(id: number, body:any) {
    return await this.prisma.notificacion.update({
      where: {notificacion_id: id},
      data: body
  })
}

  async remove(id: number) {
    await this.prisma.notificacion.delete({
      where: {notificacion_id: id}
    })
    return{
      "exito": true,
      "mensaje": "Notificación eliminada exitosamente",
      "id": id
    }
  } 
}
