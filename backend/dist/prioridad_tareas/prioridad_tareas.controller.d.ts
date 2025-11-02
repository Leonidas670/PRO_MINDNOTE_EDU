import { PrioridadTareasService } from './prioridad_tareas.service';
export declare class PrioridadTareasController {
    private readonly prioridadTareasService;
    constructor(prioridadTareasService: PrioridadTareasService);
    create(body: any): Promise<{
        prioridad_nombre: string;
        prioridad_id: number;
    }>;
    findAll(): Promise<{
        prioridad_nombre: string;
        prioridad_id: number;
    }[]>;
    findOne(id: string): Promise<{
        prioridad_nombre: string;
        prioridad_id: number;
    } | null>;
    update(id: string, body: any): {
        exito: boolean;
        mensaje: string;
        id: string;
        data: Promise<{
            prioridad_nombre: string;
            prioridad_id: number;
        }>;
    };
    remove(id: string): Promise<{
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
