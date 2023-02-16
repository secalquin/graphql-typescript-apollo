import { Product } from "./Product";

const typeDefs = `#graphql
  ${Product.types}
  
  type Query {
    ${Product.queries}
  }
  
  type Mutation {
    ${Product.mutations}
  }
`;

export default typeDefs;
