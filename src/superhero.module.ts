/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SuperheroesController } from './controller/superhero.controller';
import { SuperheroesService } from './services/superhero.service';

@Module({
  controllers: [SuperheroesController],
  providers: [SuperheroesService],
})
export class SuperheroesModule {}
