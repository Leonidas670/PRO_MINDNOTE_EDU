import { Test, TestingModule } from '@nestjs/testing';
import { PrioridadTareasService } from './prioridad_tareas.service';

describe('PrioridadTareasService', () => {
  let service: PrioridadTareasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrioridadTareasService],
    }).compile();

    service = module.get<PrioridadTareasService>(PrioridadTareasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
