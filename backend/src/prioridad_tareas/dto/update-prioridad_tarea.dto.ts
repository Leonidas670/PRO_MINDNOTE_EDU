import { PartialType } from '@nestjs/mapped-types';
import { CreatePrioridadTareaDto } from './create-prioridad_tarea.dto';

export class UpdatePrioridadTareaDto extends PartialType(CreatePrioridadTareaDto) {}
