import { TipoTareasService } from './tipo_tareas.service';
export declare class TipoTareasController {
    private readonly tipoTareasService;
    constructor(tipoTareasService: TipoTareasService);
    create(body: any): Promise<{
        tipo_nombre: string;
        tipo_id: number;
    }>;
    findAll(): Promise<{
        tipo_nombre: string;
        tipo_id: number;
    }[]>;
    findOne(id: string): Promise<{
        tipo_nombre: string;
        tipo_id: number;
    } | null>;
    update(id: string, body: any): {
        exito: boolean;
        mensaje: string;
        id: string;
        data: Promise<{
            tipo_nombre: string;
            tipo_id: number;
        }>;
    };
    remove(id: string): Promise<{
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
