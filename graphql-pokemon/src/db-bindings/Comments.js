import mongoose from "mongoose";

const Comments = mongoose.model("Comments", {
  pokemonId: String,
  comment: String,
});

export default Comments;
