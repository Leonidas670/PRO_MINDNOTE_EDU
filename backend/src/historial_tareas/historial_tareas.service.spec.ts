import { Test, TestingModule } from '@nestjs/testing';
import { HistorialTareasService } from './historial_tareas.service';

describe('HistorialTareasService', () => {
  let service: HistorialTareasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorialTareasService],
    }).compile();

    service = module.get<HistorialTareasService>(HistorialTareasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
