import React from "react";
import Header from "./components/Header/Header";
import CryptoList from "./components/CryptoList/CryptoList";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { AppRegistry } from "react-native";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:8000/graphql"
  })
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <LinearGradient
        colors={["#4facfe", "#00f2fe"]}
        style={styles.linearGradient}
        start={[0, 0]}
        end={[0.9, 0.4]}
      >
        <Header />
        <CryptoList />
      </LinearGradient>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  }
});

AppRegistry.registerComponent("MyApplication", () => App);

export default App;
