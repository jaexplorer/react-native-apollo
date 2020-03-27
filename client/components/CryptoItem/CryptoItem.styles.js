import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  background: #fafafa;
  border-bottom-width: 1px;
  border-bottom-color: rgba(79, 172, 254, 0.1);
`;

export const Image = styled.Image`
  width: 35px;
  height: 35px;
`;

export const CoinName = styled.View`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: 20px;
`;

export const Symbol = styled.Text`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Name = styled.Text`
  opacity: 0.5;
  font-size: 16px;
`;

export const CoinStatistics = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Price = styled.Text`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 16px;
  text-align: right;
`;

export const Performance = styled.View``;

export const PercentChangePlus = styled.Text`
  color: #00bfa5;
  font-weight: bold;
  font-size: 16px;
  text-align: right;
`;

export const PercentChangeMinus = styled.Text`
  color: #dd2c00;
  font-weight: bold;
  font-size: 16px;
  text-align: right;
`;
