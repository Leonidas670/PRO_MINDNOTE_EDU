import { Injectable } from '@nestjs/common';
import { CreateTipoTareaDto } from './dto/create-tipo_tarea.dto';
import { UpdateTipoTareaDto } from './dto/update-tipo_tarea.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TipoTareasService {

  constructor(
    private prisma: PrismaService
  ) {}
  create(createTipoTareaDto: CreateTipoTareaDto) {
    return 'This action adds a new tipoTarea';
  }

  findAll() {
    return this.prisma.tipoTarea.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoTarea`;
  }

  update(id: number, updateTipoTareaDto: UpdateTipoTareaDto) {
    return `This action updates a #${id} tipoTarea`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoTarea`;
  }
}
