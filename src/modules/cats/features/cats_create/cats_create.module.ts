import { Module } from '@nestjs/common';
import { CatsCreateController } from './http/rest/cats_create.controller';

import { CatsCommonModule } from '../cats_common/cats_common.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CatsResolver } from './http/graphql/cats.resolver';

@Module({
    imports: [CatsCommonModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
          }),
    ],
    controllers: [CatsCreateController],    
    providers: [CatsResolver]
})
export class CatsCreateModule { }
