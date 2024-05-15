import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { CatsService } from "../../../cats_common/domain/services/cats.service";
import { CreateCatsInput, CatsOutput } from "../../../cats_common/http/graphql/schemas/create-cats.graphql";
import { CreateCatDto } from "../../../cats_common/http/rest/dto/create-cat.dto";

@Resolver('Cats')
export class CatsResolver {

    constructor(private readonly catsService: CatsService) { }

    @Query(() => CatsOutput)
    async findOne(@Args('id') args: number): Promise<CatsOutput> {        
        const result = await this.catsService.findOne(args);

        const output: CatsOutput = {
            name: result.name,
            age: result.age,
            breed: result.breed,
            photo: result.photo,
        };

        return Promise.resolve(output);
    }

    @Mutation(() => CatsOutput)
    create(@Args('data') args: CreateCatsInput): CatsOutput {        
        const input: CreateCatDto = {
            name: args.name,
            age: args.age,
            breed: args.breed,
            photo: args.photo
        };

        const result = this.catsService.create(input);

        const output: CatsOutput = {
            name: result.name,
            age: result.age,
            breed: result.breed,
            photo: result.photo,
        };

        return output;
    }
}