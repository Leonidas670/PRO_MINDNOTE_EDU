import { Injectable } from '@nestjs/common';
import { CreatePrioridadTareaDto } from './dto/create-prioridad_tarea.dto';
import { UpdatePrioridadTareaDto } from './dto/update-prioridad_tarea.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrioridadTareasService {

  constructor(
    private prisma: PrismaService
  ) {}

  create(createPrioridadTareaDto: CreatePrioridadTareaDto) {
    return 'This action adds a new prioridadTarea';
  }

  findAll() {
    return this.prisma.prioridadTarea.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} prioridadTarea`;
  }

  update(id: number, updatePrioridadTareaDto: UpdatePrioridadTareaDto) {
    return `This action updates a #${id} prioridadTarea`;
  }

  remove(id: number) {
    return `This action removes a #${id} prioridadTarea`;
  }
}
