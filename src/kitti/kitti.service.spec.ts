import { Test, TestingModule } from '@nestjs/testing';
import { KittiService } from './kitti.service';

describe('KittiService', () => {
  let service: KittiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KittiService],
    }).compile();

    service = module.get<KittiService>(KittiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
