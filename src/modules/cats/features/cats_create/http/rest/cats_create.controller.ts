import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Cat } from '../../../cats_common/domain/entities/cat.entity';
import { CatsService } from '../../../cats_common/domain/services/cats.service';
import { CreateCatDto } from '../../../cats_common/http/rest/dto/create-cat.dto';

@ApiBearerAuth()
@ApiTags('catsCreate')
@Controller('catsCreate')
export class CatsCreateController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @ApiOperation({ summary: 'Create cat' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createCatDto: CreateCatDto): Cat {
    return this.catsService.create(createCatDto);
  }
}
