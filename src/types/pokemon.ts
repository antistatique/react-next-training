export type PokemonType = {
  name: string;
  order: number;
  height: number;
  weight: number;
  base_experience: number;
  types: {
    type: {
      name: string;
    };
  }[];
};
