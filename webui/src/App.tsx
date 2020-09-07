import React from "react";
import { useQuery } from "./models";
import { observer } from "mobx-react";

const App = () => {
  const { data, loading, error } = useQuery((store) => {
    return store.requestPokemons(10);
  });

  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return <pre>{JSON.stringify(data)}</pre>;
};

export default observer(App);
