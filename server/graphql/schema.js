import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import { CryptoAPI } from "./CryptoAPI";
import { ApolloServer } from "apollo-server-express";

const dataSources = () => ({
  CryptoAPI: new CryptoAPI()
});

const PORT = 8000;

export const server = new ApolloServer({
  cors: true,
  typeDefs,
  resolvers,
  dataSources,
  playground: {
    endpoint: `http://localhost:${PORT}/graphql`
  }
});
