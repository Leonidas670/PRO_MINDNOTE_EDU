import { Test, TestingModule } from '@nestjs/testing';
import { PrioridadTareasController } from './prioridad_tareas.controller';
import { PrioridadTareasService } from './prioridad_tareas.service';

describe('PrioridadTareasController', () => {
  let controller: PrioridadTareasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrioridadTareasController],
      providers: [PrioridadTareasService],
    }).compile();

    controller = module.get<PrioridadTareasController>(PrioridadTareasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
