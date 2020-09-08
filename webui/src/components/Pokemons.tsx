import React from "react";
import Pokemon from "./Pokemon";

interface IProps {
  pokemons: Array<any>;
}

const Pokemons = (props: IProps) => {
  console.log("render pokemons list");
  const { pokemons } = props;
  return (
    <div style={{ margin: 10 }}>
      <h1>"Pokedex"</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pokemons.map((p) => {
          return (
            <Pokemon
              key={p.id}
              name={p.name}
              id={p.id}
              number={p.number}
              maxCP={p.maxCP}
              image={p.image}
              attacks={p.attacks}
            ></Pokemon>
          );
        })}
      </div>
    </div>
  );
};

export default Pokemons;
