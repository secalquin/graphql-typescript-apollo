import { gql } from "apollo-server-express";
import { Product } from "./Product";

const typeDefs = gql`
  ${Product.types}
  
  type Query {
    ${Product.queries}
  }
  
  type Mutation {
    ${Product.mutations}
  }
`;

export default typeDefs;
