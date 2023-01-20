import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import { products } from "../data/products";

export const schema = buildSchema(`
    type Query {
        product(id: Int!): Product
        products: [Product]
    },
    type Product {
        id: Int
        name: String
        description: String
        price: Int
    }
`);

export const root = {
  product: ({ id }: { id: number }) => {
    return products.find((product) => product.id === id);
  },
  products: () => {
    return products;
  },
};

export const initGraphql = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});
