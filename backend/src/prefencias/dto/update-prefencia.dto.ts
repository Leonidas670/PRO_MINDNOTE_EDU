import { PartialType } from '@nestjs/mapped-types';
import { CreatePrefenciaDto } from './create-prefencia.dto';

export class UpdatePrefenciaDto extends PartialType(CreatePrefenciaDto) {}
