import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadoTareaDto } from './create-estado_tarea.dto';

export class UpdateEstadoTareaDto extends PartialType(CreateEstadoTareaDto) {}
