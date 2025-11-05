import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {} // âœ… constructor correcto

  async create(body: any) {
    return this.prisma.usuario.create({ data: body });
  }

  async findAll() {
    return this.prisma.usuario.findMany({
      orderBy: { usuario_id: 'desc' },
    });
  }

  async findOne(id: number) {
    return this.prisma.usuario.findFirst({
      where: { usuario_id: id },
    });
  }

  async update(id: number, body: any) {
    return this.prisma.usuario.update({
      where: { usuario_id: id },
      data: body,
    });
  }

  async remove(id: number) {
    // Nota: tu return adicional nunca se ejecutaba; lo elimino
    return this.prisma.usuario.delete({
      where: { usuario_id: id },
    });
  }
}
