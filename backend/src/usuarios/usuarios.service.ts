import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService)
{} // Assuming PrismaService is imported correctly) {
    // Initialization logic if needed
  
  async create(body:any) {
    return await this.prisma.usuario.create({
      data: body
    });
  }

  async findAll() {
    return await this.prisma.usuario.findMany({  
      orderBy: { usuario_id: 'desc' }
    })
  }

  async findOne(id: number) {
    return await this.prisma.usuario.findFirst({
      where: { usuario_id: id }
  });
  }

  async update(id: number, body: any) {
    return await this.prisma.usuario.update({
      where: { usuario_id: id },
      data: body
    });
  }

  async remove(id: number) {
    return await this.prisma.usuario.delete({
      where: { usuario_id: id }
    })
    return {
      "exito": true,
      "mensaje": "Usuario eliminado",
      "id": id
    }
  }
}
