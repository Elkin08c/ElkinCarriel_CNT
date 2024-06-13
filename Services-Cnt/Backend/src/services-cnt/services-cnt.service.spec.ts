import { Test, TestingModule } from '@nestjs/testing';
import { ServicesCntService } from './services-cnt.service';

describe('ServicesCntService', () => {
  let service: ServicesCntService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicesCntService],
    }).compile();

    service = module.get<ServicesCntService>(ServicesCntService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
