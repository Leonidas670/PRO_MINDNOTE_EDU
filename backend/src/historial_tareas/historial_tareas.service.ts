import { Injectable } from '@nestjs/common';
import { CreateHistorialTareaDto } from './dto/create-historial_tarea.dto';
import { UpdateHistorialTareaDto } from './dto/update-historial_tarea.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HistorialTareasService {
  constructor(private prisma: PrismaService)
{}
  create(createHistorialTareaDto: CreateHistorialTareaDto) {
    return 'This action adds a new historialTarea';
  }

  findAll() {
    return this.prisma.historialTarea.findMany(); 
  }

  findOne(id: number) {
    return `This action returns a #${id} historialTarea`;
  }

  update(id: number, updateHistorialTareaDto: UpdateHistorialTareaDto) {
    return `This action updates a #${id} historialTarea`;
  }

  remove(id: number) {
    return `This action removes a #${id} historialTarea`;
  }
}
