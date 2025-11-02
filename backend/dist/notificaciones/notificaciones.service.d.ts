import { PrismaService } from 'src/prisma/prisma.service';
export declare class NotificacionesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: any): Promise<{
        tarea_id: number;
        notificacion_id: number;
        notificacion_mensaje: string;
        notificacion_fechaEnvio: Date;
        notificacion_entregado: boolean;
    }>;
    findAll(): Promise<{
        tarea_id: number;
        notificacion_id: number;
        notificacion_mensaje: string;
        notificacion_fechaEnvio: Date;
        notificacion_entregado: boolean;
    }[]>;
    findOne(id: number): Promise<{
        tarea_id: number;
        notificacion_id: number;
        notificacion_mensaje: string;
        notificacion_fechaEnvio: Date;
        notificacion_entregado: boolean;
    } | null>;
    update(id: number, body: any): Promise<{
        tarea_id: number;
        notificacion_id: number;
        notificacion_mensaje: string;
        notificacion_fechaEnvio: Date;
        notificacion_entregado: boolean;
    }>;
    remove(id: number): Promise<{
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
