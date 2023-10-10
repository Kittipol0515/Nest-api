import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KittiModule } from './kitti/kitti.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [KittiModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
