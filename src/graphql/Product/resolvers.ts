import { products } from "../../data/products";

const queries = {
  product: ({ id }: { id: number }) => {
    return products.find((product) => product.id === id);
  },
  products: () => {
    return products;
  },
};

const mutations = {
  createProduct: (root, args) => {
    const newProduct = {
      id: 10,
      name: "New Product",
      description: "New Product Description",
      price: 100,
    };

    return newProduct;
  },
};

export const resolvers = { queries, mutations };
