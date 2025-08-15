import { Test, TestingModule } from '@nestjs/testing';
import { TipoTareasController } from './tipo_tareas.controller';
import { TipoTareasService } from './tipo_tareas.service';

describe('TipoTareasController', () => {
  let controller: TipoTareasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoTareasController],
      providers: [TipoTareasService],
    }).compile();

    controller = module.get<TipoTareasController>(TipoTareasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
