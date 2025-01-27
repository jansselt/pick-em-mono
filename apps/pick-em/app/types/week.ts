import { Game } from './game';

export type Week = {
  id: string;
  number: number;
  games: Game[];
  isCompleted: boolean;
  isLocked: boolean;
  isCurrent: boolean;
};
