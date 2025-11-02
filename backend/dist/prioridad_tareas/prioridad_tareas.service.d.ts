import { PrismaService } from 'src/prisma/prisma.service';
export declare class PrioridadTareasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: any): Promise<{
        prioridad_nombre: string;
        prioridad_id: number;
    }>;
    findAll(): Promise<{
        prioridad_nombre: string;
        prioridad_id: number;
    }[]>;
    findOne(id: number): Promise<{
        prioridad_nombre: string;
        prioridad_id: number;
    } | null>;
    update(id: number, body: any): Promise<{
        prioridad_nombre: string;
        prioridad_id: number;
    }>;
    remove(id: number): Promise<{
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
