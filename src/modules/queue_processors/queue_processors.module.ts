import { Module } from '@nestjs/common';

import { CatsQueueProcessor } from './cats_queue.processor';
import { LoggerModule } from '../../common/loggers/logger.module';

@Module({
    imports: [
        LoggerModule,
    ],
    providers: [CatsQueueProcessor],
})
export class QueueProcessorsModule { }
