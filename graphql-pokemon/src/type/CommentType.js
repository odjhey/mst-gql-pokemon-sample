import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";

const CommentType = new GraphQLObjectType({
  name: "Comment",
  description: "Represents comment's on a Pokemon",
  fields: {
    id: {
      type: GraphQLID,
      description: "Comment ID",
      resolve: (obj) => obj.id,
    },
    comment: {
      type: GraphQLString,
      description: "comment on a pokemon",
      resolve: (obj) => obj.comment,
    },
  },
});

export default CommentType;
