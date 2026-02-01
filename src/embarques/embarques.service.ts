import { Injectable, NotFoundException } from '@nestjs/common';
import { Shipping } from './interfaces/embarque.interface';
import { v4 as uuid } from 'uuid';
import { CreateEmbarqueDTO } from './dto/create-embarque';
import { UpdateEmbarqueDTO } from './dto/update-embarque';

@Injectable()
export class EmbarquesService {
  private embarques: Shipping[] = [];

  getAll() {
    return this.embarques;
  }

  findOneById(id: string) {
    const embarque = this.embarques.find((embarque) => embarque.id === id);
    if (!embarque)
      throw new NotFoundException(
        `El embarque con el id ${id} no fue encontrado`,
      );

    return embarque;
  }

  createNew(createEmbarqueDTO: CreateEmbarqueDTO) {
    const newEmbarque: Shipping = {
      id: uuid(),
      ...createEmbarqueDTO,
    };

    this.embarques.push(newEmbarque);
    return newEmbarque;
  }

  updateEmbarque(id: string, updateEmbarqueDto: UpdateEmbarqueDTO) {
    let embarqueDB = this.findOneById(id);

    if (updateEmbarqueDto.id && updateEmbarqueDto.id !== id)
      throw new NotFoundException(`El id no se puede modificar`);

    const datosLimpios = {};

    Object.keys(updateEmbarqueDto).forEach((key) => {
      if (updateEmbarqueDto[key] !== undefined) {
        datosLimpios[key] = updateEmbarqueDto[key];
      }
    });

    this.embarques = this.embarques.map((emb) => {
      if (emb.id === id) {
        embarqueDB = { ...embarqueDB, ...datosLimpios, id };
        return embarqueDB;
      }
      return emb;
    });

    return embarqueDB;
  }

  deleteEmbarque(id: string) {
    const embarqueDB = this.findOneById(id);
    this.embarques = this.embarques.filter((emb) => emb.id !== embarqueDB.id);
  }

  fillEmbarquesWithSeedData(embarques: Shipping[]) {
    this.embarques = embarques;
  }
}
