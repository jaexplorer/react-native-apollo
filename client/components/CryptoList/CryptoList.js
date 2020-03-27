import React from "react";
import CryptoItem from "../CryptoItem/CryptoItem";
import Spinner from "react-native-loading-spinner-overlay";
import { Text } from "react-native";
import { ContentContainer } from "./CryptoList.styles";
import { gql, useQuery } from "@apollo/client";

const GET_COINS = gql`
  query {
    coins {
      name
      symbol
      price_usd
      percent_change_24h
    }
  }
`;

const CryptoList = () => {
  const { loading, error, data } = useQuery(GET_COINS);

  return (
    <ContentContainer>
      {loading ? (
        <Spinner
          visible={loading}
          textStyle={{ color: "#253145" }}
          animation='fade'
        />
      ) : (
        data.coins.map((coin, index) => (
          <CryptoItem
            key={index}
            coin={coin.name}
            symbol={coin.symbol}
            price_usd={coin.price_usd}
            percent_change_24h={coin.percent_change_24h}
          />
        ))
      )}
    </ContentContainer>
  );
};

export default CryptoList;
