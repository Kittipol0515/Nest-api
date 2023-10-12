import { CreateKittiDto } from './dto/create-kitti.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class KittiService {
    private kitti = [
        { id: 0, name: 'KittiA', weapon: 'sword'},
        { id: 1, name: 'KittiB', weapon: 'gun'}
    ];

    getKittiByWeapon(weapon?: 'sword' | 'spear') {
        if (weapon) {
            return this.kitti.filter((kitti) => kitti.weapon === weapon);
        }
        return this.kitti;
    }

    getKittiById(id: number) {
        const kitti = this.kitti.find((kitti) => kitti.id === id);

        if (!kitti) {
            throw new Error('Kitti not found');
        }

        return kitti;
    }

    createKitti(createKittiDto: CreateKittiDto) {
        const newKitti = {
            ...createKittiDto,
            id: Date.now(),
        };
        this.kitti.push(newKitti);
        return newKitti;
    }
    
}
