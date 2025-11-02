import { PrismaService } from 'src/prisma/prisma.service';
export declare class PrioridadTareasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: any): Promise<{
        prioridad_id: number;
        prioridad_nombre: string;
    }>;
    findAll(): Promise<{
        prioridad_id: number;
        prioridad_nombre: string;
    }[]>;
    findOne(id: number): Promise<{
        prioridad_id: number;
        prioridad_nombre: string;
    } | null>;
    update(id: number, body: any): Promise<{
        prioridad_id: number;
        prioridad_nombre: string;
    }>;
    remove(id: number): Promise<{
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
