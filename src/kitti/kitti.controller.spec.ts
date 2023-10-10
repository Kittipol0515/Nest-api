import { Test, TestingModule } from '@nestjs/testing';
import { KittiController } from './kitti.controller';

describe('KittiController', () => {
  let controller: KittiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KittiController],
    }).compile();

    controller = module.get<KittiController>(KittiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
