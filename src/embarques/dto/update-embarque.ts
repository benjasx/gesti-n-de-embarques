import { IsString, IsNumber, IsOptional, IsUUID } from 'class-validator';
import { Transform } from 'class-transformer';
export class UpdateEmbarqueDTO {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly route_name?: string;

  @IsString()
  @IsOptional()
  readonly shipping_1?: string;

  @IsString()
  @IsOptional()
  readonly shipping_2?: string;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => Number(value))
  readonly kilograms?: number;
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => Number(value))
  readonly cash?: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => Number(value))
  readonly volume?: number;
}
