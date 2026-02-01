import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { EmbarquesService } from './embarques.service';
import { CreateEmbarqueDTO } from './dto/create-embarque';
import { UpdateEmbarqueDTO } from './dto/update-embarque';

@Controller('embarques')
export class EmbarquesController {
  constructor(private readonly embarqueService: EmbarquesService) {}

  @Get()
  getAllEmbarques() {
    return this.embarqueService.getAll();
  }

  @Get(':id')
  getEmbarqueById(@Param('id', ParseUUIDPipe) id: string) {
    return this.embarqueService.findOneById(id);
  }

  @Post()
  createNewEmbarque(@Body() createEmbarqueDTO: CreateEmbarqueDTO) {
    return this.embarqueService.createNew(createEmbarqueDTO);
  }

  @Patch(':id')
  updateEmbarque(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateEmbarqueDTO: UpdateEmbarqueDTO,
  ) {
    return this.embarqueService.updateEmbarque(id, updateEmbarqueDTO);
  }

  @Delete(':id')
  deleteEmbarque(@Param('id', ParseUUIDPipe) id: string) {
    return this.embarqueService.deleteEmbarque(id);
  }
}
