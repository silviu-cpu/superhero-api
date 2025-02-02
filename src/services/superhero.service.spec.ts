/* eslint-disable prettier/prettier */
import { SuperheroesService } from './superhero.service';

describe('SuperheroesService', () => {
  let service: SuperheroesService;

  beforeEach(() => {
    service = new SuperheroesService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a superhero', () => {
    const hero = service.create({ name: 'Superman', superpower: 'Flying', humilityScore: 10 });
    expect(hero).toHaveProperty('id');
    expect(hero.name).toBe('Superman');
    expect(hero.superpower).toBe('Flying');
  });

  it('should return superheroes sorted by humilityScore', () => {
    service.create({ name: 'Batman', superpower: 'Rich', humilityScore: 8 });
    service.create({ name: 'Flash', superpower: 'Speed', humilityScore: 9 });

    const heroes = service.findAll();
    expect(heroes[0].name).toBe('Flash');
    expect(heroes[1].name).toBe('Batman');
  });
});
