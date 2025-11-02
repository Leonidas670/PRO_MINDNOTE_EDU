import { HistorialTareasService } from './historial_tareas.service';
export declare class HistorialTareasController {
    private readonly historialTareasService;
    constructor(historialTareasService: HistorialTareasService);
    create(body: any): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, body: any): {
        exito: boolean;
        mensaje: string;
        id: string;
        data: Promise<any>;
    };
    remove(id: string): Promise<{
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
