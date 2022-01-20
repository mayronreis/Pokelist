export default interface pokemonListDTO {
  count: number;
  next?: string;
  previous?: string;
  results: {
      name: string;
      url: string;
    }[];
};
