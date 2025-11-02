import { HistorialTareasService } from './historial_tareas.service';
export declare class HistorialTareasController {
    private readonly historialTareasService;
    constructor(historialTareasService: HistorialTareasService);
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
    findOne(id: string): Promise<{
        usuario_id: number;
        estado_id: number;
        tarea_id: number;
        historial_id: number;
        historial_fechaRegistro: Date;
    } | null>;
    update(id: string, body: any): {
        exito: boolean;
        mensaje: string;
        id: string;
        data: Promise<{
            usuario_id: number;
            estado_id: number;
            tarea_id: number;
            historial_id: number;
            historial_fechaRegistro: Date;
        }>;
    };
    remove(id: string): Promise<{
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
