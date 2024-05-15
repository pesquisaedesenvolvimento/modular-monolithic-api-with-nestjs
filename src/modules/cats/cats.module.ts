import { Module } from '@nestjs/common';

import { CatsCreateModule } from './features/cats_create/cats_create.module';
import { CatsSelectModule } from './features/cats_select/cats_select.module';

@Module({
  imports:[
    CatsCreateModule,
    CatsSelectModule,
  ]  
})
export class CatsModule {}
