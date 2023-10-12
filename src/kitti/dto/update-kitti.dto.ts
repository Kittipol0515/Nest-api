import { PartialType } from '@nestjs/mapped-types';
import { CreateKittiDto } from './create-kitti.dto';

export class UpdateKittiDto extends PartialType(CreateKittiDto) {}
