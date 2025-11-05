import { PartialType } from '@nestjs/mapped-types';
import { CreateHistorialTareaDto } from './create-historial_tarea.dto';

export class UpdateHistorialTareaDto extends PartialType(CreateHistorialTareaDto) {}
