import { Injectable } from '@nestjs/common';
import { CreatePrioridadTareaDto } from './dto/create-prioridad_tarea.dto';
import { UpdatePrioridadTareaDto } from './dto/update-prioridad_tarea.dto';

@Injectable()
export class PrioridadTareasService {
  create(createPrioridadTareaDto: CreatePrioridadTareaDto) {
    return 'This action adds a new prioridadTarea';
  }

  findAll() {
    return `This action returns all prioridadTareas`;
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
