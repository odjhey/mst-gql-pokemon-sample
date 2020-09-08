import React, { useState, useContext } from "react";
import { useQuery } from "./models";
import { observer } from "mobx-react";
import Portal from "./components/Portal";
import CommentBox from "./components/Comment";

import { StoreContext } from "./models";

interface IPokemon {
  name: any;
  id: any;
  number: any;
  maxCP: any;
  image: any;
  attacks: any;
  comments: any;
  onComment: (id: string, comment: string) => void;
}
const Pokemon = observer((props: IPokemon) => {
  const {
    name,
    id,
    number,
    maxCP,
    image,
    attacks,
    comments,
    onComment,
  } = props;
  //const [commentsShow, setCommentsShow] = useState(false);
  const store = useContext(StoreContext);
  return (
    <div>
      <div
        style={{
          border: "1px solid tomato",
          width: 200,
          margin: 5,
          padding: 5,
        }}
        onClick={() => {
          //setCommentsShow((prev: any) => !prev);
          store.setActive(number);
        }}
      >
        <h5>{number}</h5>
        <img src={image} style={{ height: 100 }}></img>
        <p>
          {name}, {maxCP}
        </p>
      </div>
      {store.activePokemonNo === number && (
        <Portal>
          <div
            style={{
              padding: 5,
              margin: 10,
              border: "2px dashed tomato",
              position: "absolute",
              top: 20,
              left: 20,
              zIndex: 10,
              minWidth: 300,
              background: "tomato",
            }}
          >
            <h1>
              {number} - {name}
            </h1>
            {!comments.length && <p>No comment.</p>}
            {comments.map((c: any) => {
              return (
                <div key={c.id}>
                  <p>{c.comment}</p>
                </div>
              );
            })}
            <CommentBox
              onComment={(comment) => {
                console.log("newcomment", number, comment);
                onComment(number, comment);
              }}
              onClose={() => {
                store.setActive("");
              }}
            ></CommentBox>
          </div>
        </Portal>
      )}
    </div>
  );
});

const App = () => {
  const { data, loading, error } = useQuery((store) => {
    return store.requestPokemons({ first: 999 });
  });

  const commentQuery = useQuery();

  const addComment = (id: string, comment: string) => {
    commentQuery.setQuery(
      commentQuery.store.addComment({ id: id, comment: comment })
    );
  };

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
              onComment={addComment}
            ></Pokemon>
          );
        })}
      </div>
    </div>
  );
};

export default observer(App);
