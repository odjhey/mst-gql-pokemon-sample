import Comment from "../db-bindings/Comments";

const addComment = async (pokemonId, comment) => {
  const newComment = new Comment({
    pokemonId,
    comment,
  });
  return newComment.save();
};

const getComments = async (pokemonId) => {
  return Comment.find({ pokemonId });
};

export { addComment, getComments };
