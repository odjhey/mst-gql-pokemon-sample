import { Instance } from "mobx-state-tree";
import { RootStoreBase } from "./RootStore.base";
import { POKEMON_FRAGMENT } from "./fragments";

export interface RootStoreType extends Instance<typeof RootStore.Type> {}

export const RootStore = RootStoreBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self));
  },
  requestPokemons(first: number) {
    const query = self.queryPokemons({ first: first }, POKEMON_FRAGMENT);
    return query;
  },
}));
