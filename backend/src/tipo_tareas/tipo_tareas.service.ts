import { Injectable } from '@nestjs/common';
import { CreateTipoTareaDto } from './dto/create-tipo_tarea.dto';
import { UpdateTipoTareaDto } from './dto/update-tipo_tarea.dto';

@Injectable()
export class TipoTareasService {
  create(createTipoTareaDto: CreateTipoTareaDto) {
    return 'This action adds a new tipoTarea';
  }

  findAll() {
    return `This action returns all tipoTareas`;
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
