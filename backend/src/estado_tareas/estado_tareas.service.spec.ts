import { Test, TestingModule } from '@nestjs/testing';
import { EstadoTareasService } from './estado_tareas.service';

describe('EstadoTareasService', () => {
  let service: EstadoTareasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadoTareasService],
    }).compile();

    service = module.get<EstadoTareasService>(EstadoTareasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
