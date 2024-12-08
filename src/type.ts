

export interface Player {
  name: string;
}

export type Draw = Record<Player['name'], Player['name']>;