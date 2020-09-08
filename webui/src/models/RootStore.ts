import { Instance, types } from "mobx-state-tree";
import { RootStoreBase } from "./RootStore.base";
import { POKEMON_FRAGMENT } from "./fragments";

export interface RootStoreType extends Instance<typeof RootStore.Type> {}

export const RootStore = RootStoreBase.props({
  activePokemonNo: types.optional(types.string, ""),
})
  .views((self) => ({
    vPokemon: (id: string) => {
      return self.pokemon.get(id);
    },
  }))
  .actions((self) => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self));
    },
    setActive(no: string) {
      self.activePokemonNo = no;
    },
    requestPokemons({ first }: { first: number }) {
      const query = self.queryPokemons({ first: first }, POKEMON_FRAGMENT);
      return query;
    },
    addComment({ id, comment }: { id: string; comment: string }) {
      const query = self.mutateComment(
        { id: id, comment: comment },
        POKEMON_FRAGMENT
      );
      return query;
    },
  }));
