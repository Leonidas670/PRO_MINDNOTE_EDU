import { UpdateLoginDto } from './dto/update-login.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class LoginService {
    private prisma;
    constructor(prisma: PrismaService);
    login(body: any): Promise<{
        success: boolean;
        mensaje: string;
        data?: undefined;
    } | {
        success: boolean;
        mensaje: string;
        data: any;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLoginDto: UpdateLoginDto): string;
    remove(id: number): string;
}
