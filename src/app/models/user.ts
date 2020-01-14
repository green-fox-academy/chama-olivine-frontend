import { HeroModel } from './heroModel';

export class User {
  userId: number;
  username: string;
  password: string;
  heroes: HeroModel[];
}

export interface ICurrentUser {
  accessToken: string;
  refreshToken: string;
}
