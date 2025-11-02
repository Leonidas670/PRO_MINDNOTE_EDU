import { PrioridadTareasService } from './prioridad_tareas.service';
export declare class PrioridadTareasController {
    private readonly prioridadTareasService;
    constructor(prioridadTareasService: PrioridadTareasService);
    create(body: any): Promise<{
        prioridad_id: number;
        prioridad_nombre: string;
    }>;
    findAll(): Promise<{
        prioridad_id: number;
        prioridad_nombre: string;
    }[]>;
    findOne(id: string): Promise<{
        prioridad_id: number;
        prioridad_nombre: string;
    } | null>;
    update(id: string, body: any): {
        exito: boolean;
        mensaje: string;
        id: string;
        data: Promise<{
            prioridad_id: number;
            prioridad_nombre: string;
        }>;
    };
    remove(id: string): Promise<{
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
