import React from "react";
import images from "../../assets/index";
import {
  Container,
  Image,
  CoinName,
  Symbol,
  Name,
  CoinStatistics,
  Price,
  Performance,
  PercentChangePlus,
  PercentChangeMinus
} from "./CryptoItem.styles";

const CryptoItem = ({ symbol, name, price_usd, percent_change_24h }) => {
  return (
    <Container>
      <Image source={images[symbol.toLowerCase()]} />
      <CoinName>
        <Symbol>{symbol}</Symbol>
        <Name>{name}</Name>
      </CoinName>
      <CoinStatistics>
        <Price>${parseFloat(price_usd).toFixed(3)}</Price>
        <Performance>
          {percent_change_24h < 0 ? (
            <PercentChangeMinus>
              {parseFloat(percent_change_24h).toFixed(3)}%
            </PercentChangeMinus>
          ) : (
            <PercentChangePlus>
              {parseFloat(percent_change_24h).toFixed(3)}%
            </PercentChangePlus>
          )}
        </Performance>
      </CoinStatistics>
    </Container>
  );
};

export default CryptoItem;
