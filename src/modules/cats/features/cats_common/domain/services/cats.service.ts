import { Inject, Injectable } from '@nestjs/common';
import { CreateCatDto } from '../../http/rest/dto/create-cat.dto';
import { Cat } from '../entities/cat.entity';
import { CATS_REPOSITORY_INJECTABLE, ICatsRepository } from '../../data/cats.repository';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { CatsCreatedEvent } from '../../../../../../common/events/cats-created.event';
import { CATS_QUEUE_EVENT_NAME, CATS_QUEUE_INJECTABLE } from '../../data/cats.queue';


@Injectable()
export class CatsService {
  constructor(
    @Inject(CATS_REPOSITORY_INJECTABLE)
    private readonly catsRepository: ICatsRepository,
    
    @InjectQueue(CATS_QUEUE_INJECTABLE) 
    private catsQueue: Queue,
    ) {}
  
  create(cat: CreateCatDto): Cat {
    this.catsRepository.create(cat);

    this.catsQueue.add(CATS_QUEUE_EVENT_NAME, new CatsCreatedEvent(cat.name));
    return cat;
  }

  async findOne(id: number): Promise<Cat> {
    return await this.catsRepository.findOne(id);
  }
}
