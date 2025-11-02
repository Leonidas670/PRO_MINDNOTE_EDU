import { PrismaService } from 'src/prisma/prisma.service';
export declare class NotificacionesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: any): Promise<{
        notificacion_mensaje: string;
        notificacion_fechaEnvio: Date;
        notificacion_entregado: boolean;
        notificacion_id: number;
        tarea_id: number;
    }>;
    findAll(): Promise<{
        notificacion_mensaje: string;
        notificacion_fechaEnvio: Date;
        notificacion_entregado: boolean;
        notificacion_id: number;
        tarea_id: number;
    }[]>;
    findOne(id: number): Promise<{
        notificacion_mensaje: string;
        notificacion_fechaEnvio: Date;
        notificacion_entregado: boolean;
        notificacion_id: number;
        tarea_id: number;
    } | null>;
    update(id: number, body: any): Promise<{
        notificacion_mensaje: string;
        notificacion_fechaEnvio: Date;
        notificacion_entregado: boolean;
        notificacion_id: number;
        tarea_id: number;
    }>;
    remove(id: number): Promise<{
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
