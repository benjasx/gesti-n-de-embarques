import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { EmbarquesModule } from 'src/embarques/embarques.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [EmbarquesModule],
})
export class SeedModule {}
