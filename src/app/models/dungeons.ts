import { Equipment } from './equipment';
import { Obstacle } from './obstacle';

export class Dungeon {
  heroId: number;
  dungeonId: number;
  obstacles: Obstacle[];
  removedObstacles: number;
  name: string;
  image: string;
  constructor(dungeon) {
    this.heroId = dungeon.heroId;
    this.dungeonId = dungeon.dungeonId;
    this.obstacles = dungeon.obstacles;
    this.removedObstacles = dungeon.removedObstacles;
    this.name = dungeon.name;
    this.image = dungeon.image;
  }

  classifyObstacles() {
    this.obstacles.forEach((e, i) => {
      if (i < this.removedObstacles) {
        e.label = 'X';
      }
    });
  }
}
