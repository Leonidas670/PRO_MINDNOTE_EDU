import { Test, TestingModule } from '@nestjs/testing';
import { HistorialTareasController } from './historial_tareas.controller';
import { HistorialTareasService } from './historial_tareas.service';

describe('HistorialTareasController', () => {
  let controller: HistorialTareasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistorialTareasController],
      providers: [HistorialTareasService],
    }).compile();

    controller = module.get<HistorialTareasController>(HistorialTareasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
