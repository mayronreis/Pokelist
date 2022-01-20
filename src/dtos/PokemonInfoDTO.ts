export default interface PokemonInfoDTO {
  id: string;
  name: string;
  sprites: {
    back_default: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    }
  }[];
  abilities: {
    ability: {
      name: string,
      url: string
    },
    is_hidden: boolean,
    slot: number
  }[];
};
