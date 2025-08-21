import { Injectable } from '@nestjs/common';
import { CreateEstadoTareaDto } from './dto/create-estado_tarea.dto';
import { UpdateEstadoTareaDto } from './dto/update-estado_tarea.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EstadoTareasService {

  constructor(
    private prisma: PrismaService
  ) {}
  create(createEstadoTareaDto: CreateEstadoTareaDto) {
    return 'This action adds a new estadoTarea';
  }

  findAll() {
    return this.prisma.estadoTareas.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} estadoTarea`;
  }

  update(id: number, updateEstadoTareaDto: UpdateEstadoTareaDto) {
    return `This action updates a #${id} estadoTarea`;
  }

  remove(id: number) {
    return `This action removes a #${id} estadoTarea`;
  }
}
