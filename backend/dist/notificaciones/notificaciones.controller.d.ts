import { NotificacionesService } from './notificaciones.service';
export declare class NotificacionesController {
    private readonly notificacionesService;
    constructor(notificacionesService: NotificacionesService);
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
    findOne(id: string): Promise<{
        notificacion_mensaje: string;
        notificacion_fechaEnvio: Date;
        notificacion_entregado: boolean;
        notificacion_id: number;
        tarea_id: number;
    } | null>;
    update(id: string, body: any): {
        exito: boolean;
        mensaje: string;
        id: string;
        data: Promise<{
            notificacion_mensaje: string;
            notificacion_fechaEnvio: Date;
            notificacion_entregado: boolean;
            notificacion_id: number;
            tarea_id: number;
        }>;
    };
    remove(id: string): Promise<{
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
