import { Injectable } from '@nestjs/common';
import { CreateEstadoTareaDto } from './dto/create-estado_tarea.dto';
import { UpdateEstadoTareaDto } from './dto/update-estado_tarea.dto';

@Injectable()
export class EstadoTareasService {
  create(createEstadoTareaDto: CreateEstadoTareaDto) {
    return 'This action adds a new estadoTarea';
  }

  findAll() {
    return `This action returns all estadoTareas`;
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
