import { Equipment } from './equipment';

export class Hero {
  id: number;
  name: string;
  experience: number;
  level: number;
  healthmax: number;
  healthact: number;
  attackmin: number;
  attackmax: number;
  defense: number;
  inventory: Equipment[];
  finalWords: string;

  constructor(id?: number, name?: string) {
    this.id = id;
    this.name = name;
    this.experience = 0;
    this.level = 1;
    this.healthmax = 500;
    this.healthact = 500;
    this.attackmin = 1;
    this.attackmax = 5;
    this.defense = 1;
    this.inventory = [];
    this.finalWords = 'Feck! Arse! Drink!';
  }

}
