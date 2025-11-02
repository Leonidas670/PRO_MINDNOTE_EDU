import { TipoTareasService } from './tipo_tareas.service';
export declare class TipoTareasController {
    private readonly tipoTareasService;
    constructor(tipoTareasService: TipoTareasService);
    create(body: any): Promise<{
        tipo_id: number;
        tipo_nombre: string;
    }>;
    findAll(): Promise<{
        tipo_id: number;
        tipo_nombre: string;
    }[]>;
    findOne(id: string): Promise<{
        tipo_id: number;
        tipo_nombre: string;
    } | null>;
    update(id: string, body: any): {
        exito: boolean;
        mensaje: string;
        id: string;
        data: Promise<{
            tipo_id: number;
            tipo_nombre: string;
        }>;
    };
    remove(id: string): Promise<{
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
