import { Injectable } from '@nestjs/common';
import { CreateRaceDto } from './dto/create-race.dto';
import { UpdateRaceDto } from './dto/update-race.dto';
import { PrismaService } from '../prisma.service'; // IMportacion de prisma

@Injectable()
export class RacesService {
  constructor(private prisma: PrismaService) {}

  create(createRaceDto: CreateRaceDto) {
    return this.prisma.race.create({ 
      data: createRaceDto,
    });
  }

  findAll() {
    return this.prisma.race.findMany();
  }

  findOne(id: number) {
    return this.prisma.race.findUnique({
      where: { id },
    });
  }

  update(id: number, updateRaceDto: UpdateRaceDto) {
    return this.prisma.race.update({
      where: { id },
      data: updateRaceDto,
    });
  }

  remove(id: number) {
    return this.prisma.race.delete({
      where: { id },
    });
  }
}