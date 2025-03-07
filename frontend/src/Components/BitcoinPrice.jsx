import { useState, useEffect } from "react";
import axios from "axios";

const BitcoinPrice = () => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );
        setPrice(response.data.bitcoin.usd);
      } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Bitcoin Price:</h2>
      {price ? <p>${price}</p> : <p>Loading...</p>}
    </div>
  );
};

export default BitcoinPrice;
