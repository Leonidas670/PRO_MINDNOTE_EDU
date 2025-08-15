import { Test, TestingModule } from '@nestjs/testing';
import { EstadoTareasController } from './estado_tareas.controller';
import { EstadoTareasService } from './estado_tareas.service';

describe('EstadoTareasController', () => {
  let controller: EstadoTareasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadoTareasController],
      providers: [EstadoTareasService],
    }).compile();

    controller = module.get<EstadoTareasController>(EstadoTareasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
