import { UsuariosService } from './usuarios.service';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
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
    findOne(id: string): Promise<{
        usuario_id: number;
        usuario_nombre: string;
        usuario_apellido: string;
        usuario_correo: string;
        usuario_contrasena: string;
        usuario_rol: string;
    } | null>;
    update(id: string, body: any): {
        exito: boolean;
        mensaje: string;
        id: string;
        data: Promise<{
            usuario_id: number;
            usuario_nombre: string;
            usuario_apellido: string;
            usuario_correo: string;
            usuario_contrasena: string;
            usuario_rol: string;
        }>;
    };
    remove(id: string): Promise<{
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
