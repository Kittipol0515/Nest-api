import { Module } from '@nestjs/common';
import { KittiController } from './kitti.controller';
import { KittiService } from './kitti.service';

@Module({
  controllers: [KittiController],
  providers: [KittiService]
})
export class KittiModule {}
