import { Test, TestingModule } from '@nestjs/testing';
import { PrefenciasController } from './prefencias.controller';
import { PrefenciasService } from './prefencias.service';

describe('PrefenciasController', () => {
  let controller: PrefenciasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrefenciasController],
      providers: [PrefenciasService],
    }).compile();

    controller = module.get<PrefenciasController>(PrefenciasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
