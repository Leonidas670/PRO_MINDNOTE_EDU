import { EstadoTareasService } from './estado_tareas.service';
export declare class EstadoTareasController {
    private readonly estadoTareasService;
    constructor(estadoTareasService: EstadoTareasService);
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
