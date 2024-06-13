import { Test, TestingModule } from '@nestjs/testing';
import { ServicesCntController } from './services-cnt.controller';
import { ServicesCntService } from './services-cnt.service';

describe('ServicesCntController', () => {
  let controller: ServicesCntController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicesCntController],
      providers: [ServicesCntService],
    }).compile();

    controller = module.get<ServicesCntController>(ServicesCntController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
