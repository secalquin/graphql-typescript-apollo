import { gql } from "apollo-server";

export const ProductTypes = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String!
  }
  extend type Query {
    product: Product!
    products: [Product]!
    countProducts: Int!
    findProductByName(name: String!): Product
  }
`;
