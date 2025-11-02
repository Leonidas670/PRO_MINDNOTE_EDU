import { PrismaService } from 'src/prisma/prisma.service';
export declare class EstadoTareasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: any): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, body: any): Promise<any>;
    remove(id: number): Promise<{
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
