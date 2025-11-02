import { PrismaService } from 'src/prisma/prisma.service';
export declare class TareasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: any): Promise<{
        usuario_id: number;
        estado_id: number;
        prioridad_id: number;
        tipo_id: number;
        tarea_id: number;
        tarea_titulo: string;
        tarea_descripcion: string;
        tarea_fechaLimite: Date;
        tarea_hora: Date;
    }>;
    findAll(): Promise<{
        usuario_id: number;
        estado_id: number;
        prioridad_id: number;
        tipo_id: number;
        tarea_id: number;
        tarea_titulo: string;
        tarea_descripcion: string;
        tarea_fechaLimite: Date;
        tarea_hora: Date;
    }[]>;
    findOne(id: number): Promise<{
        usuario_id: number;
        estado_id: number;
        prioridad_id: number;
        tipo_id: number;
        tarea_id: number;
        tarea_titulo: string;
        tarea_descripcion: string;
        tarea_fechaLimite: Date;
        tarea_hora: Date;
    } | null>;
    update(id: number, body: any): Promise<{
        usuario_id: number;
        estado_id: number;
        prioridad_id: number;
        tipo_id: number;
        tarea_id: number;
        tarea_titulo: string;
        tarea_descripcion: string;
        tarea_fechaLimite: Date;
        tarea_hora: Date;
    }>;
    remove(id: number): Promise<{
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
