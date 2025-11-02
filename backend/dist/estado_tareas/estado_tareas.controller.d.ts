import { EstadoTareasService } from './estado_tareas.service';
export declare class EstadoTareasController {
    private readonly estadoTareasService;
    constructor(estadoTareasService: EstadoTareasService);
    create(body: any): Promise<{
        estado_id: number;
        estado_nombre: string;
    }>;
    findAll(): Promise<{
        estado_id: number;
        estado_nombre: string;
    }[]>;
    findOne(id: string): Promise<{
        estado_id: number;
        estado_nombre: string;
    } | null>;
    update(id: string, body: any): {
        exito: boolean;
        mensaje: string;
        id: string;
        data: Promise<{
            estado_id: number;
            estado_nombre: string;
        }>;
    };
    remove(id: string): Promise<{
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
