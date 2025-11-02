import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    create(createLoginDto: CreateLoginDto): Promise<{
        success: boolean;
        mensaje: string;
        data?: undefined;
    } | {
        success: boolean;
        mensaje: string;
        data: {
            usuario_id: number;
            usuario_nombre: string;
            usuario_apellido: string;
            usuario_correo: string;
            usuario_contrasena: string;
            usuario_rol: string;
        };
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLoginDto: UpdateLoginDto): string;
    remove(id: string): string;
}
