import { Injectable } from '@nestjs/common';
import { CreateNotificacioneDto } from './dto/create-notificacione.dto';
import { UpdateNotificacioneDto } from './dto/update-notificacione.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotificacionesService {

  constructor(
    private prisma: PrismaService
  ) {}
  create(createNotificacioneDto: CreateNotificacioneDto) {
    return 'This action adds a new notificacione';
  }

  findAll() {
    return this.prisma.notificacion.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} notificacione`;
  }

  update(id: number, updateNotificacioneDto: UpdateNotificacioneDto) {
    return `This action updates a #${id} notificacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} notificacione`;
  }
}
