import { ApiProperty } from '@nestjs/swagger';

export class Cat {
  /**
   * The name of the Cat
   * @example Kitty
   */
  name: string;

  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  age: number;

  @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Cat',
  })
  breed: string;

  @ApiProperty({ example: "https://example-image.jpg", description: 'The photo of the Cat' })
  photo: string;
}
