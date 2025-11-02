import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoTareaDto } from './create-tipo_tarea.dto';

export class UpdateTipoTareaDto extends PartialType(CreateTipoTareaDto) {}
