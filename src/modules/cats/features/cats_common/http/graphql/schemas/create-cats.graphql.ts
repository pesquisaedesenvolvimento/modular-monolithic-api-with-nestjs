import { Field, InputType, ObjectType } from "@nestjs/graphql"

@InputType()
export class CreateCatsInput {

    @Field(() => String)    
    readonly name: string

    @Field(() => Number)        
    readonly age: number

    @Field(() => String)        
    readonly breed : string

    @Field(() => String)        
    readonly photo : string
}

@ObjectType()
export class CatsOutput {
    @Field(() => String)
    readonly name: string

    @Field(() => Number)        
    readonly age: number

    @Field(() => String)        
    readonly breed : string

    @Field(() => String)        
    readonly photo : string
}