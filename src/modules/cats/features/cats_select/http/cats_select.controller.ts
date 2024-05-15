import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CatsService } from '../../cats_common/domain/services/cats.service';
import { Cat } from '../../cats_common/domain/entities/cat.entity';

@ApiBearerAuth()
@ApiTags('catsSelect')
@Controller('catsSelect')
export class CatsSelectController {
  constructor(private readonly catsService: CatsService) {}


  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Cat,
  })
  async findOne(@Param('id') id: string): Promise<Cat> {
    return this.catsService.findOne(+id);
  }
}
