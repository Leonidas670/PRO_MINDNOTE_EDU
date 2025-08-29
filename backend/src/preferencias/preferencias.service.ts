import { Body, Injectable } from '@nestjs/common';
import { CreatePreferenciaDto } from './dto/create-preferencia.dto';
import { UpdatePreferenciaDto } from './dto/update-preferencia.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PreferenciasService {
  constructor(
    private prisma: PrismaService
  ) {}


  async create(body:any) {
    return await this.prisma.preferencia.create({
      data: body
  })
}

  async findAll() {
    return await this.prisma.preferencia.findMany({
      orderBy: { preferencia_id: 'desc' }
    });
  }

  async findOne(id: number) {
    return await this.prisma.preferencia.findFirst({
      where: { preferencia_id: id }
    });
  }

  async update(id: number, body: any) {
    return await this.prisma.preferencia.update({
      where: { preferencia_id: id },
      data: body
    });
  }

  async remove(id: number) {
    await this.prisma.preferencia.delete({
      where: { preferencia_id: id }
    });
    return {
      "exito": true,
      "mensaje": "Preferencia eliminada",
      "id": id
    };
  }
}
