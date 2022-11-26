import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import EverySingleRow from "./Components/RenderEachRow";

function App() {
  const [cryptoCoins, setcryptoCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((responce) => {
        setcryptoCoins(responce.data);
        console.log(responce.data);
      })
      .catch((error) => alert(error));
  }, []);

  const filteredCoins = cryptoCoins;
  return (
    <div className="coin-app">
      {filteredCoins.map((coin) => {
        return (
          <EverySingleRow
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;
