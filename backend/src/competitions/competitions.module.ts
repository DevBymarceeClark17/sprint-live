import { Module } from '@nestjs/common';
import { CompetitionsService } from './competitions.service';
import { CompetitionsController } from './competitions.controller';
import { PrismaService } from '../prisma.service'; //  Importar Prisma aqui

@Module({
  controllers: [CompetitionsController],
  providers: [CompetitionsService, PrismaService], // Lo voy agregando aqui
})
export class CompetitionsModule {}
