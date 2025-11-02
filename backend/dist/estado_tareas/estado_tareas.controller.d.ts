import { EstadoTareasService } from './estado_tareas.service';
import { CreateEstadoTareaDto } from './dto/create-estado_tarea.dto';
import { UpdateEstadoTareaDto } from './dto/update-estado_tarea.dto';
export declare class EstadoTareasController {
    private readonly estadoTareasService;
    constructor(estadoTareasService: EstadoTareasService);
    create(createEstadoTareaDto: CreateEstadoTareaDto): Promise<{
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
    update(id: string, updateEstadoTareaDto: UpdateEstadoTareaDto): Promise<{
        estado_id: number;
        estado_nombre: string;
    }>;
    remove(id: string): Promise<{
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
