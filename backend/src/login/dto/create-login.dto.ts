import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateLoginDto {
  @IsEmail()
  usuario_correo: string;

  @IsString()
  @MinLength(8)
  usuario_contrasena: string;
}
