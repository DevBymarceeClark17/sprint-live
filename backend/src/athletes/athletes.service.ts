import { Injectable } from '@nestjs/common';
import { CreateAthleteDto } from './dto/create-athlete.dto';
import { UpdateAthleteDto } from './dto/update-athlete.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AthletesService {
  // Inyectamos Prisma
  constructor(private prisma: PrismaService) {}

  // 1. Crear Atleta (INSERT)
  create(createAthleteDto: CreateAthleteDto) {
    return this.prisma.athlete.create({
      data: createAthleteDto,
    });
  }

  // 2. Obtener todos (SELECT *)
  findAll() {
    return this.prisma.athlete.findMany();
  }

  // 3. Obtener uno por ID (SELECT WHERE id = X)
  findOne(id: number) {
    return this.prisma.athlete.findUnique({
      where: { id: id },
    });
  }

  // 4. Actualizar
  update(id: number, updateAthleteDto: UpdateAthleteDto) {
    return this.prisma.athlete.update({
      where: { id: id },
      data: updateAthleteDto,
    });
  }

  // 5. Borrar
  remove(id: number) {
    return this.prisma.athlete.delete({
      where: { id: id },
    });
  }
}
