import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) {}

  // ⚠️ Nota: por ahora compara contraseña en plano (tal como lo tenías).
  // Luego te paso cómo migrar a bcrypt.

  async login(body: { usuario_correo: string; usuario_contrasena: string }) {
    const existe = await this.prisma.usuario.findFirst({
      where: {
        usuario_correo: body.usuario_correo,
        usuario_contrasena: body.usuario_contrasena,
      },
    });

    if (!existe) {
      return {
        success: false,
        mensaje: 'Credenciales incorrectas',
      };
    }

    return {
      success: true,
      mensaje: 'Credenciales correctas',
      data: existe,
    };
  }

  findAll() {
    return 'This action returns all login';
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, _updateLoginDto: unknown) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
