import { Injectable } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TareasService {

  constructor(
    private prisma: PrismaService
  ) {}

  async create(body:any) {

    const [hours, minutes] = body.tarea_hora.split(":").map(Number);

    // Crear un Date (puede ser hoy, la fecha no importa porque MySQL solo guardará la hora)
    const hora = new Date();
    hora.setHours(hours, minutes, 0, 0);

    console.log(body)

    return await this.prisma.tarea.create({
      
      data: {
        "tarea_titulo": body.tarea_titulo,
        "tarea_descripcion": body.tarea_descripcion,
        "tarea_fechaLimite": new Date(body.tarea_fechaLimite),
        "tarea_hora": hora,
      estado: {
        connect: { estado_id: parseInt(body.estado_id)},   // conecta con un estado existente
      },
      prioridad: {
        connect: { prioridad_id: Number(body.prioridad_id) }, // conecta con una prioridad existente
      },
      tipo: {
        connect: { tipo_id: Number(body.tipo_id) },      // conecta con un tipo existente
      },
      usuario: {
        connect: { usuario_id: Number(body.usuario_id) },   // conecta con un usuario existente
      },  
      }
    });
    console.log(body)
  }

  async findAll() {
    return await this.prisma.tarea.findMany({
      orderBy: { tarea_id: 'desc' }
    });
  }

  async findOne(id: number) {
    return await this.prisma.tarea.findFirst({
      where: { tarea_id: id }
    });
  }

  async update(id: number, body:any) {
    return await this.prisma.tarea.update({
      where: { tarea_id: id },
      data: body
  })
}

  async remove(id: number) {
    await this.prisma.tarea.delete({
      where: { tarea_id: id }
    });
    return { 
      "exito": true, 
      "mensaje": "Tarea eliminada con exito",
      "id": id,

  }
}
}
