import { Injectable } from '@nestjs/common';
import { EmbarquesService } from 'src/embarques/embarques.service';
import { EMBARQUES_SEED } from './data/embarques.seed';

@Injectable()
export class SeedService {
  constructor(private readonly embarquesService: EmbarquesService) {}

  populateDB() {
    this.embarquesService.fillEmbarquesWithSeedData(EMBARQUES_SEED);
    return 'Seed executed successfully';
  }
}
