import { PrismaService } from 'src/prisma/prisma.service';
export declare class TipoTareasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: any): Promise<{
        tipo_id: number;
        tipo_nombre: string;
    }>;
    findAll(): Promise<{
        tipo_id: number;
        tipo_nombre: string;
    }[]>;
    findOne(id: number): Promise<{
        tipo_id: number;
        tipo_nombre: string;
    } | null>;
    update(id: number, body: any): Promise<{
        tipo_id: number;
        tipo_nombre: string;
    }>;
    remove(id: number): Promise<{
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
