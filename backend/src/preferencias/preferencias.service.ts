import { Injectable } from '@nestjs/common';
import { CreatePreferenciaDto } from './dto/create-preferencia.dto';
import { UpdatePreferenciaDto } from './dto/update-preferencia.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PreferenciasService {
  constructor(
    private prisma: PrismaService
  ) {}


  create(createPreferenciaDto: CreatePreferenciaDto) {
    return 'This action adds a new preferencia';
  }

  findAll() {
    return this.prisma.preferencia.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} preferencia`;
  }

  update(id: number, updatePreferenciaDto: UpdatePreferenciaDto) {
    return `This action updates a #${id} preferencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} preferencia`;
  }
}
