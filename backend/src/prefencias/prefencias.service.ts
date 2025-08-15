import { Injectable } from '@nestjs/common';
import { CreatePrefenciaDto } from './dto/create-prefencia.dto';
import { UpdatePrefenciaDto } from './dto/update-prefencia.dto';

@Injectable()
export class PrefenciasService {
  create(createPrefenciaDto: CreatePrefenciaDto) {
    return 'This action adds a new prefencia';
  }

  findAll() {
    return `This action returns all prefencias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prefencia`;
  }

  update(id: number, updatePrefenciaDto: UpdatePrefenciaDto) {
    return `This action updates a #${id} prefencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} prefencia`;
  }
}
