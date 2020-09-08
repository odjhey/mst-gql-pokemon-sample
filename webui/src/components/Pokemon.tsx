import React, { useContext } from "react";

import Portal from "./Portal";
import CommentBox from "./Comment";

import { StoreContext, useQuery } from "../models";
import { observer } from "mobx-react";

interface IPokemon {
  name: any;
  id: any;
  number: any;
  maxCP: any;
  image: any;
  attacks: any;
  comments: any;
}
const Pokemon = observer((props: IPokemon) => {
  const { name, id, number, maxCP, image, attacks, comments } = props;
  //const [commentsShow, setCommentsShow] = useState(false);
  const { data, loading, error, store, setQuery } = useQuery();
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
              background: "white",
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
            {error ? (
              <h5 style={{ color: "red" }}>{error.graphQLErrors[0].message}</h5>
            ) : null}
            <CommentBox
              onComment={(comment) => {
                console.log("newcomment", number, comment);
                //onComment(number, comment);
                setQuery(store.addComment({ id: number, comment }));
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

export default Pokemon;
