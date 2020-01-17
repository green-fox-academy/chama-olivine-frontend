import { Equipment } from './equipment';
import { Obstacle } from './obstacle';

export class Dungeon {
  private _heroId: number;
  private _dungeonId: number;
  private _obstacles: Obstacle[];
  private _removedObstacles: number;
  private _name: string;
  private _image: string;
  constructor(dungeon) {
    this._heroId = dungeon.heroId;
    this._dungeonId = dungeon.dungeonId;
    this._obstacles = dungeon.obstacles;
    this._removedObstacles = dungeon.removedObstacles;
    this._name = dungeon.name;
    this._image = dungeon.image;
  }

  get heroId(): number {
    return this._heroId;
  }

  get dungeonId(): number {
    return this._dungeonId;
  }

  get obstacles(): Obstacle[] {
    return this._obstacles;
  }

  get removedObstacles(): number {
    return this._removedObstacles;
  }

  get name(): string {
    return this._name;
  }

  get image(): string {
    return this._image;
  }
}
