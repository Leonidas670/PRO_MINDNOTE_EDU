import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsuariosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: any): Promise<{
        usuario_id: number;
        usuario_nombre: string;
        usuario_apellido: string;
        usuario_correo: string;
        usuario_contrasena: string;
        usuario_rol: string;
    }>;
    findAll(): Promise<{
        usuario_id: number;
        usuario_nombre: string;
        usuario_apellido: string;
        usuario_correo: string;
        usuario_contrasena: string;
        usuario_rol: string;
    }[]>;
    findOne(id: number): Promise<{
        usuario_id: number;
        usuario_nombre: string;
        usuario_apellido: string;
        usuario_correo: string;
        usuario_contrasena: string;
        usuario_rol: string;
    } | null>;
    update(id: number, body: any): Promise<{
        usuario_id: number;
        usuario_nombre: string;
        usuario_apellido: string;
        usuario_correo: string;
        usuario_contrasena: string;
        usuario_rol: string;
    }>;
    remove(id: number): Promise<{
        usuario_id: number;
        usuario_nombre: string;
        usuario_apellido: string;
        usuario_correo: string;
        usuario_contrasena: string;
        usuario_rol: string;
    } | {
        exito: boolean;
        mensaje: string;
        id: number;
    }>;
}
