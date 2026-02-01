import { Module } from '@nestjs/common';
import { EmbarquesService } from './embarques.service';
import { EmbarquesController } from './embarques.controller';

@Module({
  controllers: [EmbarquesController],
  providers: [EmbarquesService],
  exports: [EmbarquesService],
})
export class EmbarquesModule {}
