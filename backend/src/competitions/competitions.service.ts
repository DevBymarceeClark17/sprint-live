import { Injectable } from '@nestjs/common';
import { CreateCompetitionDto } from './dto/create-competition.dto';
import { UpdateCompetitionDto } from './dto/update-competition.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CompetitionsService {
  constructor(private prisma: PrismaService) {}

  create(createCompetitionDto: CreateCompetitionDto) {
    return this.prisma.competition.create({
      data: createCompetitionDto,
    });
  }

  findAll() {
    // Incluimos las carreras (races) para ver los hits que tiene cada competencia
    return this.prisma.competition.findMany({
      include: { races: true } 
    });
  }

  findOne(id: number) {
    return this.prisma.competition.findUnique({
      where: { id },
      include: { races: true }
    });
  }

  update(id: number, updateCompetitionDto: UpdateCompetitionDto) {
    return this.prisma.competition.update({
      where: { id },
      data: updateCompetitionDto,
    });
  }

  remove(id: number) {
    return this.prisma.competition.delete({
      where: { id },
    });
  }
}
