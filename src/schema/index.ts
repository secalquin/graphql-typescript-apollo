import { gql } from "apollo-server-express";
import { ProductResolvers, ProductTypes } from "./product";
import { ProductQuery } from "./product/query";

export const typeDefs = gql`
  type Query
  ${ProductTypes}
`;
export const resolvers = {
  Query: {
    ...ProductQuery,
  },
  Product: ProductResolvers,
};

console.log(typeDefs);
