import { Module } from '@nestjs/common';
import { EmbarquesController } from './embarques/embarques.controller';
import { EmbarquesModule } from './embarques/embarques.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [EmbarquesModule, SeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
