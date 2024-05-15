import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateCatDto {
  @ApiProperty({
    example: 'Maine Coon',
    description: 'Name of the cat',
  })

  @IsString()
  readonly name: string;

  ///////////

  @ApiProperty({
    example: 5,
    description: 'Age of the cat',
  })

  @IsInt()
  readonly age: number;

  ///////////

  @ApiProperty({
    example: 'Black',
    description: 'Breed of the cat',
  })

  @IsString()
  readonly breed: string;

  ///////////

  @ApiProperty({
    example: 'https://example-image.jpg',
    description: 'Photo of the cat',
  })

  @IsString()
  readonly photo: string;
}
