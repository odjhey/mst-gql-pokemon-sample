import { selectFromPokemon } from "../";

export const POKEMON_FRAGMENT = 
  selectFromPokemon()
    .id
    .number
    .name
    .maxCP
    .image
    .toString();
