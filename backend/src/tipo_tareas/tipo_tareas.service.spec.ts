import { Test, TestingModule } from '@nestjs/testing';
import { TipoTareasService } from './tipo_tareas.service';

describe('TipoTareasService', () => {
  let service: TipoTareasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoTareasService],
    }).compile();

    service = module.get<TipoTareasService>(TipoTareasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
