import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService)
{} // Assuming PrismaService is imported correctly) {
    


  async login(body: any) {

      let existe = await this.prisma.usuario.findFirst({
      where: { usuario_correo: body.usuario_correo , 
               usuario_contrasena: body.usuario_contrasena
       }
      });
      

      if(!existe){
        return { success: false, mensaje: "Credenciales incorrectas" }
      }else{
        return { success: true, mensaje: "Credenciales correctas", "data": existe } 
      }

  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
