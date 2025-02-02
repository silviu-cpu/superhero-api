/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { SuperheroResponseDto } from '../dto/superhero-response.dto';

interface Superhero {
  id: number;
  name: string;
  superpower: string;
  humilityScore: number;
}

@Injectable()
export class SuperheroesService {
  private superheroes: Superhero[] = [];
  private idCounter = 1;

  create(superhero: Omit<Superhero, 'id'>) {
    const newHero = { id: this.idCounter++, ...superhero };
    this.superheroes.push(newHero);
    return newHero;
  }

  findAll(): SuperheroResponseDto[] {
    return this.superheroes
      .sort((a, b) => b.humilityScore - a.humilityScore)
      .map(hero => ({
        id: hero.id,
        name: hero.name,
        superpower: hero.superpower,
        humilityScore: hero.humilityScore
      }));
  }
}