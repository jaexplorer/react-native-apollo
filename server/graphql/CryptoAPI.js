const { RESTDataSource } = require("apollo-datasource-rest");
import axios from "axios";

export class CryptoAPI extends RESTDataSource {
  constructor() {
    super();
  }

  coinReducer(coin) {
    return {
      name: coin.name,
      symbol: coin.symbol,
      price_usd: coin.quote.USD.price,
      percent_change_24h: coin.quote.USD.percent_change_24h
    };
  }

  async getCoins() {
    const { data } = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?",
      {
        params: {
          start: "1",
          sort: "market_cap",
          limit: "20"
        },
        headers: {
          "X-CMC_PRO_API_KEY": "fa9614ad-dae4-4df8-871c-5b831f95b726"
        }
      }
    );
    return data.data.map(coin => this.coinReducer(coin));
  }
}
