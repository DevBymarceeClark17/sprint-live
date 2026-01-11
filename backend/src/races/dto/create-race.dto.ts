import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateRaceDto {
  nombre: string;
  competenciaId: number;
}