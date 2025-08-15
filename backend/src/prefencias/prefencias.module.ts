import { Module } from '@nestjs/common';
import { PrefenciasService } from './prefencias.service';
import { PrefenciasController } from './prefencias.controller';

@Module({
  controllers: [PrefenciasController],
  providers: [PrefenciasService],
})
export class PrefenciasModule {}
