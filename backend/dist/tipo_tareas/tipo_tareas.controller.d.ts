import { TipoTareasService } from './tipo_tareas.service';
export declare class TipoTareasController {
    private readonly tipoTareasService;
    constructor(tipoTareasService: TipoTareasService);
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
