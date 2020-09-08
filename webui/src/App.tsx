import React, { useState, useContext } from "react";
import { useQuery } from "./models";
import { observer } from "mobx-react";
import Pokemon from "./components/Pokemon";

const App = () => {
  const { data, loading, error } = useQuery((store) => {
    return store.requestPokemons({ first: 999 });
  });

  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  console.log("data from App", data);

  return (
    <div style={{ margin: 10 }}>
      <h1>{loading ? "loading..." : "Pokedex"}</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data?.pokemons.map((p) => {
          return (
            <Pokemon
              key={p.id}
              name={p.name}
              id={p.id}
              number={p.number}
              maxCP={p.maxCP}
              image={p.image}
              attacks={p.attacks}
              comments={p.comments}
            ></Pokemon>
          );
        })}
      </div>
    </div>
  );
};

export default observer(App);
