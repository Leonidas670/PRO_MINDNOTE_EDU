import { PrismaService } from 'src/prisma/prisma.service';
export declare class TipoTareasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: any): Promise<{
        tipo_nombre: string;
        tipo_id: number;
    }>;
    findAll(): Promise<{
        tipo_nombre: string;
        tipo_id: number;
    }[]>;
    findOne(id: number): Promise<{
        tipo_nombre: string;
        tipo_id: number;
    } | null>;
    update(id: number, body: any): Promise<{
        tipo_nombre: string;
        tipo_id: number;
    }>;
    remove(id: number): Promise<{
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
