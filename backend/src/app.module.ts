import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AthletesModule } from './athletes/athletes.module';
import { RacesModule } from './races/races.module';
import { CompetitionsModule } from './competitions/competitions.module';

@Module({
  imports: [AthletesModule, RacesModule, CompetitionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
