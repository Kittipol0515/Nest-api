import { Controller, Get, Post, Put, Delete, Param, Query, Body } from '@nestjs/common';
import { CreateKittiDto } from './dto/create-kitti.dto';
import { KittiService } from './kitti.service';



@Controller('kitti')
export class KittiController {
    constructor(private readonly kittiService: KittiService) {}

    @Get()
    getKitti(@Query('weapon') weapon: 'sword' | 'spear') { 
        return this.kittiService.getKittiByWeapon(weapon);
    }

    @Get(':id')
    getOneKitti(@Param('id') id: string) {
        return {
            id 
        };
    }

    @Post()
    createKitti(@Body() createKittiDto: CreateKittiDto) {
        return {
            name: createKittiDto.name
        };
    }

    @Put(':id')
    updateKitti(@Param('id') id: string) {
        return {};
    }

    @Delete(':id')
    deleteKitti(@Param('id') id: string) {
        return {};
    }
}
