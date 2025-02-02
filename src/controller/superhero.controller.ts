/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SuperheroesService } from '../services/superhero.service';
import { CreateSuperheroDto } from '../dto/create-superhero.dto';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createSuperheroDto: CreateSuperheroDto) {
    return this.superheroesService.create(createSuperheroDto);
  }

  @Get()
  findAll() {
    return this.superheroesService.findAll();
  }
}