import { PrismaService } from 'src/prisma/prisma.service';
export declare class HistorialTareasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: any): Promise<{
        usuario_id: number;
        estado_id: number;
        tarea_id: number;
        historial_id: number;
        historial_fechaRegistro: Date;
    }>;
    findAll(): Promise<{
        usuario_id: number;
        estado_id: number;
        tarea_id: number;
        historial_id: number;
        historial_fechaRegistro: Date;
    }[]>;
    findOne(id: number): Promise<{
        usuario_id: number;
        estado_id: number;
        tarea_id: number;
        historial_id: number;
        historial_fechaRegistro: Date;
    } | null>;
    update(id: number, body: any): Promise<{
        usuario_id: number;
        estado_id: number;
        tarea_id: number;
        historial_id: number;
        historial_fechaRegistro: Date;
    }>;
    remove(id: number): Promise<{
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
