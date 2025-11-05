import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateLoginDto {
  @IsEmail()
  usuario_correo!: string;           // <- el "!" indica que se asignará antes de usarse

  @IsString()
  @MinLength(8)
  usuario_contrasena!: string;       // <- idem
}
