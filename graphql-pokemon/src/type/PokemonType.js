import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
} from "graphql";
import { globalIdField, fromGlobalId } from "graphql-relay";

import PokemonDimensionType from "./PokemonDimensionType";
import PokemonAttackType from "./PokemonAttackType";
import EvolutionRequirementType from "./EvolutionRequirementType";
import CommentType from "./CommentType";

import { getPokemonByEvolutions } from "../service/Pokemon";
import { getComments } from "../service/add-comment";

const PokemonType = new GraphQLObjectType({
  name: "Pokemon",
  description: "Represents a Pokémon",
  fields: () => ({
    id: globalIdField("Pokemon"),
    number: {
      type: GraphQLString,
      description: "The identifier of this Pokémon",
      resolve: (obj) => `00${obj.id}`.slice(-3),
    },
    name: {
      type: GraphQLString,
      description: "The name of this Pokémon",
      resolve: (obj) => obj.name,
    },
    weight: {
      type: PokemonDimensionType,
      description: "The minimum and maximum weight of this Pokémon",
      resolve: (obj) => obj.weight,
    },
    height: {
      type: PokemonDimensionType,
      description: "The minimum and maximum weight of this Pokémon",
      resolve: (obj) => obj.height,
    },
    classification: {
      type: GraphQLString,
      description: "The classification of this Pokémon",
      resolve: (obj) => obj.classification,
    },
    types: {
      type: new GraphQLList(GraphQLString),
      description: "The type(s) of this Pokémon",
      resolve: (obj) => obj.types,
    },
    resistant: {
      type: new GraphQLList(GraphQLString),
      description: "The type(s) of Pokémons that this Pokémon is resistant to",
      resolve: (obj) => obj.resistant,
    },
    attacks: {
      type: PokemonAttackType,
      description: "The attacks of this Pokémon",
      resolve: (obj) => obj.attacks,
    },
    weaknesses: {
      type: new GraphQLList(GraphQLString),
      description: "The type(s) of Pokémons that this Pokémon weak to",
      resolve: (obj) => obj.weaknesses,
    },
    fleeRate: {
      type: GraphQLFloat,
      resolve: (obj) => obj.fleeRate,
    },
    maxCP: {
      type: GraphQLInt,
      description: "The maximum CP of this Pokémon",
      resolve: (obj) => obj.maxCP,
    },
    evolutions: {
      type: new GraphQLList(PokemonType),
      description: "The evolutions of this Pokémon",
      resolve: async (obj) => await getPokemonByEvolutions(obj.evolutions),
    },
    evolutionRequirements: {
      type: EvolutionRequirementType,
      description: "The evolution requirements of this Pokémon",
      resolve: (obj) => obj.evolutionRequirements,
    },
    maxHP: {
      type: GraphQLInt,
      description: "The maximum HP of this Pokémon",
      resolve: (obj) => obj.maxHP,
    },
    image: {
      type: GraphQLString,
      resolve: (obj) =>
        `https://img.pokemondb.net/artwork/${obj.name
          .toLowerCase()
          .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
          .replace(" ", "-")}.jpg`,
    },
    comments: {
      type: GraphQLList(CommentType),
      description: "Comments",
      resolve: async (obj) => {
        const comments = await getComments(obj.id);
        return comments;
      },
    },
  }),
});

export default PokemonType;
