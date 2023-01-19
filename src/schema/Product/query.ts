import { products } from "../../data/products";

export const ProductQuery = {
  product: () => products[0],
  products: () => products,
  countProducts: () => products.length,
  findProductByName: (_root, args) => {
    return products.find((product) => product.name === args.name);
  },
};
