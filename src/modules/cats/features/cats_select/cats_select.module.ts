import { Module } from '@nestjs/common';
import { CatsCommonModule } from '../cats_common/cats_common.module';
import { CatsSelectController } from './http/cats_select.controller';

@Module({
    imports: [CatsCommonModule],
    controllers: [CatsSelectController],    
})
export class CatsSelectModule { }
