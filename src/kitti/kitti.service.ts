import { UpdateKittiDto } from './dto/update-kitti.dto';
import { CreateKittiDto } from './dto/create-kitti.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class KittiService {
    private kitti = [
        { id: 0, name: 'KittiA', weapon: 'sword'},
        { id: 1, name: 'KittiB', weapon: 'gun'}
    ];

    getKittiByWeapon(weapon?: 'sword' | 'gun') {
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

    updateKitti(id: number, updateKittiDto: UpdateKittiDto){
        this.kitti = this.kitti.map((kitti) => {
            if(kitti.id === id) {
                return {...kitti, ...updateKittiDto}
            }

            return kitti;
        })
        return this.getKittiById(id);
    }

    removeKitti(id : number) {
        const toBeRemoved = this.getKittiById(id);

        this.kitti = this.kitti.filter((kitti) => kitti.id !== id);

        return toBeRemoved;
    }
    
}
