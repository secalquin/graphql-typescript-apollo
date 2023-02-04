import { Product } from "./Product";

const resolvers = {
  Query: {
    ...Product.resolvers.queries,
  },
  Mutation: {
    ...Product.resolvers.mutations,
  },
};

export default resolvers;
