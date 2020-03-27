import gql from "graphql-tag";

export const typeDefs = gql`
  type Coin {
    name: String
    symbol: String
    price_usd: String
    percent_change_24h: String
  }

  type Query {
    coins: [Coin]
  }
`;
