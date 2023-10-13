import { Controller, Get, Post, Put, Delete, Param, Query, Body } from '@nestjs/common';
import { CreateKittiDto } from './dto/create-kitti.dto';
import { KittiService } from './kitti.service';
import { UpdateKittiDto } from './dto/update-kitti.dto';



@Controller('kitti')
export class KittiController {
    constructor(private readonly kittiService: KittiService) {}

    @Get()
    getKitti(@Query('weapon') weapon: 'sword' | 'gun') { 
        return this.kittiService.getKittiByWeapon(weapon);
    }

    @Get(':id')
    getOneKitti(@Param('id') id: string) {
        return this.kittiService.getKittiById(+id)
    }

    @Post()
    createKitti(@Body() createKittiDto: CreateKittiDto) {
        return this.kittiService.createKitti(createKittiDto)
    }

    @Put(':id')
    updateKitti(@Param('id') id: string) {
        return this.kittiService.updateKitti(+id, UpdateKittiDto);
    }

    @Delete(':id')
    deleteKitti(@Param('id') id: string) {
        return this.kittiService.removeKitti(+id);
    }
}
