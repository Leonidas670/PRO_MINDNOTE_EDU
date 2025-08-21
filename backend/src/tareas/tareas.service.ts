import { Injectable } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TareasService {
  constructor(
    private prisma: PrismaService
  ) {}

  create(createTareaDto: CreateTareaDto) {
    return 'This action adds a new tarea';
  }

  findAll() {
    return this.prisma.tareas.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} tarea`;
  }

  update(id: number, updateTareaDto: UpdateTareaDto) {
    return `This action updates a #${id} tarea`;
  }

  remove(id: number) {
    return `This action removes a #${id} tarea`;
  }
}
