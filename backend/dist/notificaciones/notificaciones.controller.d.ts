import { NotificacionesService } from './notificaciones.service';
export declare class NotificacionesController {
    private readonly notificacionesService;
    constructor(notificacionesService: NotificacionesService);
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
    findOne(id: string): Promise<{
        tarea_id: number;
        notificacion_id: number;
        notificacion_mensaje: string;
        notificacion_fechaEnvio: Date;
        notificacion_entregado: boolean;
    } | null>;
    update(id: string, body: any): {
        exito: boolean;
        mensaje: string;
        id: string;
        data: Promise<{
            tarea_id: number;
            notificacion_id: number;
            notificacion_mensaje: string;
            notificacion_fechaEnvio: Date;
            notificacion_entregado: boolean;
        }>;
    };
    remove(id: string): Promise<{
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
