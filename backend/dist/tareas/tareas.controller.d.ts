import { TareasService } from './tareas.service';
export declare class TareasController {
    private readonly tareasService;
    constructor(tareasService: TareasService);
    create(body: any): Promise<{
        usuario_id: number;
        tipo_id: number;
        prioridad_id: number;
        tarea_id: number;
        estado_id: number;
        tarea_titulo: string;
        tarea_descripcion: string;
        tarea_fechaLimite: Date;
        tarea_hora: Date;
    }>;
    findAll(): Promise<{
        usuario_id: number;
        tipo_id: number;
        prioridad_id: number;
        tarea_id: number;
        estado_id: number;
        tarea_titulo: string;
        tarea_descripcion: string;
        tarea_fechaLimite: Date;
        tarea_hora: Date;
    }[]>;
    findOne(id: string): Promise<{
        usuario_id: number;
        tipo_id: number;
        prioridad_id: number;
        tarea_id: number;
        estado_id: number;
        tarea_titulo: string;
        tarea_descripcion: string;
        tarea_fechaLimite: Date;
        tarea_hora: Date;
    } | null>;
    update(id: string, body: any): {
        exito: boolean;
        mensaje: string;
        id: string;
        data: Promise<{
            usuario_id: number;
            tipo_id: number;
            prioridad_id: number;
            tarea_id: number;
            estado_id: number;
            tarea_titulo: string;
            tarea_descripcion: string;
            tarea_fechaLimite: Date;
            tarea_hora: Date;
        }>;
    };
    remove(id: string): Promise<{
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
