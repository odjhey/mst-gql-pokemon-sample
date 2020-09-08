import React from "react";
import { useQuery } from "../models";
import { observer } from "mobx-react";
import Pokemons from "../components/Pokemons";

const PokemonsContainer = () => {
  console.log("render pokemon container");
  const { loading, error, store } = useQuery((store) => {
    return store.requestPokemons({ first: 2 });
  });

  const pokemons = store.vPokemons();

  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  return (
    <div style={{ margin: 10 }}>
      {loading ? "loading..." : <Pokemons pokemons={pokemons}></Pokemons>}
    </div>
  );
};

export default observer(PokemonsContainer);
