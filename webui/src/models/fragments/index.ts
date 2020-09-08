import { selectFromPokemon } from "../";

export const POKEMON_FRAGMENT = 
  selectFromPokemon()
    .id
    .number
    .name
    .maxCP
    .image
    .attacks( (a) => a.fast( (f) => f.name.damage.type ))
    .comments( (c) => c.id.comment )
    .toString();
