import { Controller, Get, Post, Put, Delete, Param, Query, Body } from '@nestjs/common';
import { CreateKittiDto } from './dto/create-kitti.dto';

@Controller('kitti')
export class KittiController {
    @Get()
    getKitti(@Query('type') type: string) { 
        return [{ type }];
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
