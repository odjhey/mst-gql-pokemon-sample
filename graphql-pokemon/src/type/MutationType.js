import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { fromGlobalId } from "graphql-relay";

import PokemonType from "./PokemonType";

import { getPokemonById } from "../service/Pokemon";
import { addComment } from "../service/add-comment";

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Mutations",
  fields: () => ({
    mutation: {
      type: MutationType,
      resolve: (...args) => args,
    },
    comment: {
      type: PokemonType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
        comment: {
          type: GraphQLString,
        },
      },
      resolve: async (obj, { id, comment }) => {
        await addComment(id, comment);
        return await getPokemonById(id);
      },
    },
  }),
});

export default MutationType;
