import { Controller, Get, Post, Put, Delete, Param, Query } from '@nestjs/common';

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
    createKitti() {
        return {};
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
