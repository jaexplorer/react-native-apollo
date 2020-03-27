export const resolvers = {
  Query: {
    coins: (_, __, { dataSources }) => dataSources.CryptoAPI.getCoins()
  }
};
