import { IsString, IsNumber, IsOptional, Min } from 'class-validator';
export class CreateEmbarqueDTO {
  @IsString({ message: 'El nombre es obligatorio' })
  readonly route_name: string;
  @IsString()
  readonly shipping_1: string;
  @IsString()
  @IsOptional()
  readonly shipping_2: string;

  @IsNumber()
  @Min(1)
  readonly kilograms: number;
  @IsNumber()
  readonly cash: number;

  @IsNumber()
  readonly volume: number;
}
