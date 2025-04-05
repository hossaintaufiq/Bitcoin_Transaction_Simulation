
import { useEffect, useState } from "react";
import axios from "axios";
import FAQSection from "../Components/FAQSection";
import { Link } from "react-router-dom";

const TradingDashboard = () => {
  const [popularCoins, setPopularCoins] = useState([]);
  const [news, setNews] = useState([]);

  // Fetch popular coins data from CoinGecko API
  useEffect(() => {
    const fetchPopularCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              ids: "bitcoin,ethereum,bnb,ripple,solana",
              order: "market_cap_desc",
              per_page: 5,
              page: 1,
              sparkline: false,
            },
          }
        );

        const coinsData = response.data.map((coin) => ({
          name: coin.name,
          symbol: coin.symbol.toUpperCase(),
          price: `$${coin.current_price.toLocaleString()}`,
          change: coin.price_change_percentage_24h.toFixed(2) + "%",
        }));

        setPopularCoins(coinsData);
      } catch (error) {
        console.error("Error fetching popular coins data:", error);
      }
    };

    fetchPopularCoins();
  }, []);

  // Fetch cryptocurrency news from CryptoCompare API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://min-api.cryptocompare.com/data/v2/news/", // CryptoCompare News API
          {
            params: {
              lang: "EN", // Language: English
            },
          }
        );

        const newsData = response.data.Data.slice(0, 4).map((article) => ({
          title: article.title,
          source: article.source_info.name,
        }));

        setNews(newsData);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Fund Your Account and News Section */}
        <div className="lg:col-span-2">
          {/* Fund Your Account Section */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
             Lets Start Trading Simulation with Demo Balance
          </h1>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-600">Your Estimated Balance ➔</p>
            <p className="text-2xl font-bold text-gray-800">
              1000.0 USD*
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Today’s Pnt. $0.00 (+1.93%)
            </p>
            <div className="mt-4 flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
               <Link to={"/trade"}>Trade</Link> 
              </button>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
              <Link to={"/market"}>Markets</Link> 
                
              </button>
            </div>
          </div>

          {/* News Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {news.map((article, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-lg font-bold text-gray-800">
                    {article.title}
                  </p>
                  <p className="text-sm text-gray-500">{article.source}</p>
                </div>
              ))}
            </div>
            <button className="mt-4 text-blue-500 hover:text-blue-600 transition">
              View All News &gt;
            </button>
          </div>
        </div>

        {/* Right Side: Popular Coins Section */}
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Popular</h2>
          <div className="space-y-4">
            {popularCoins.map((coin, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-bold text-gray-800">
                      {coin.name}
                    </p>
                    <p className="text-sm text-gray-500">{coin.symbol}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-800">
                      {coin.price}
                    </p>
                    <p
                      className={`text-sm ${
                        coin.change.startsWith("-")
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {coin.change}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 text-blue-500 hover:text-blue-600 transition">
            View All SDI+ Coins &gt;
          </button>
        </div>
      </div>

      {/* FAQ Section Added Below */}
      <FAQSection />
    </div>
  );
};

export default TradingDashboard;




