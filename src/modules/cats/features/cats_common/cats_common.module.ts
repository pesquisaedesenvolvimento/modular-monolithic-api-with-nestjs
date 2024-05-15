import { Module } from '@nestjs/common';
import { CatsService } from './domain/services/cats.service';
import { CATS_REPOSITORY_INJECTABLE, CatsRepository } from './data/cats.repository';
import { BullModule } from '@nestjs/bull';
import { CATS_QUEUE_INJECTABLE } from './data/cats.queue';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        HttpModule,
        BullModule.registerQueue({
            name: CATS_QUEUE_INJECTABLE
          }),
    ],
    providers: [
        CatsService,
        {
            provide: CATS_REPOSITORY_INJECTABLE,
            useClass: CatsRepository,
        },],
    exports: [CatsService]
})
export class CatsCommonModule { }
