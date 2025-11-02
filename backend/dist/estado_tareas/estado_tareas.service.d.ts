import { PrismaService } from 'src/prisma/prisma.service';
export declare class EstadoTareasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: any): Promise<{
        estado_id: number;
        estado_nombre: string;
    }>;
    findAll(): Promise<{
        estado_id: number;
        estado_nombre: string;
    }[]>;
    findOne(id: number): Promise<{
        estado_id: number;
        estado_nombre: string;
    } | null>;
    update(id: number, body: any): Promise<{
        estado_id: number;
        estado_nombre: string;
    }>;
    remove(id: number): Promise<{
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
