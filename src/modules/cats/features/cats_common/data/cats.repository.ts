import { ForbiddenException, Injectable } from '@nestjs/common';
import { Cat } from '../domain/entities/cat.entity';
import { CreateCatDto } from '../http/rest/dto/create-cat.dto';
import { HttpService } from '@nestjs/axios';
import { catchError, lastValueFrom, map } from 'rxjs';

export const CATS_REPOSITORY_INJECTABLE = 'CATS_REPOSITORY';
export interface ICatsRepository {
    create(cat: CreateCatDto): Cat;
    findOne(id: number): Promise<Cat>;
}

@Injectable()
export class CatsRepository implements ICatsRepository {

    constructor(private readonly remoteService: HttpService) { }

    private readonly cats: Cat[] = [];

    create(cat: CreateCatDto): Cat {
        this.cats.push(cat);
        return cat;
    }

    async findOne(id: number): Promise<Cat> {
        const request = this.remoteService.get('https://api.thecatapi.com/v1/images/search')
            .pipe(
                map((res) => res.data))
            .pipe(
                catchError(() => {
                    throw new ForbiddenException('API not available');
                }),
            );

        const fact = await lastValueFrom(request);
        
        const cat = this.cats[id];
        cat.photo = fact[0].url;

        return cat;
    }
}
