
import { Process, Processor } from '@nestjs/bull';

import { Job } from 'bull';
import { LoggerService } from '../../common/loggers/logger.service';
import { CatsCreatedEvent } from '../../common/events/cats-created.event';
import { CATS_QUEUE_EVENT_NAME, CATS_QUEUE_INJECTABLE } from '../cats/features/cats_common/data/cats.queue';


@Processor(CATS_QUEUE_INJECTABLE)
export class CatsQueueProcessor {

    constructor(
        private readonly loggerService: LoggerService,        

    ) {
        this.loggerService.contextName = CatsQueueProcessor.name
    }

    @Process(CATS_QUEUE_EVENT_NAME)
    async sendSomething({ data }: Job<CatsCreatedEvent>) {
        this.loggerService.info(`Called method: ${this.sendSomething.name}()`);        

        console.log(data.name);
    }
}
