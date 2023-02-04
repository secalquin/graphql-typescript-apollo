import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "../graphql";

interface IServerConfig {
  server_port: string | number;
  graphqlPath: string;
}

interface IServer {
  start(callback: () => void): void;
}

class Server implements IServer {
  private app: Application;
  private port: string | number;
  private graphqlPath: string;

  constructor({ server_port, graphqlPath }: IServerConfig) {
    this.app = express();
    this.port = server_port;
    this.graphqlPath = graphqlPath;

    this.middlewares();
    this.initApolloServer();
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private async initApolloServer() {
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app: this.app, path: this.graphqlPath });
  }

  start(callback: () => void) {
    this.app.listen(this.port, callback);
  }
}

export default Server;
