import { Test, TestingModule } from '@nestjs/testing';
import { PrefenciasService } from './prefencias.service';

describe('PrefenciasService', () => {
  let service: PrefenciasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrefenciasService],
    }).compile();

    service = module.get<PrefenciasService>(PrefenciasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
