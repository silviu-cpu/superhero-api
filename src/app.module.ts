/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SuperheroesModule } from './superhero.module';

@Module({
  imports: [SuperheroesModule], 
})
export class AppModule {}
