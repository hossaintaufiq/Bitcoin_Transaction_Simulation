
import { FaBitcoin, FaEthereum, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MarketData = () => {
  // ... (keep all existing state and logic unchanged)
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [chartData, setChartData] = useState({});
  const [selectedCoin, setSelectedCoin] = useState("bitcoin"); // Default to Bitcoin

  // Fetch live market data from CoinGecko API
  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              ids: "bitcoin,ethereum,cardano,solana",
              order: "market_cap_desc",
              per_page: 10,
              page: 1,
              sparkline: false,
            },
          }
        );

        const data = response.data.map((crypto) => ({
          id: crypto.id,
          name: crypto.name,
          symbol: crypto.symbol.toUpperCase(),
          price: crypto.current_price,
          change: crypto.price_change_percentage_24h,
          volume: crypto.total_volume,
          marketCap: crypto.market_cap,
          icon:
            crypto.symbol === "btc" ? (
              <FaBitcoin className="text-yellow-500" />
            ) : crypto.symbol === "eth" ? (
              <FaEthereum className="text-purple-500" />
            ) : (
              <span className="text-blue-500">
                {crypto.symbol.toUpperCase()}
              </span>
            ),
        }));

        setCryptocurrencies(data);
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    };

    fetchMarketData();
  }, []);

  // Fetch chart data for the selected coin
  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart`,
          {
            params: {
              vs_currency: "usd",
              days: "7",
            },
          }
        );

        const chartData = {
          labels: response.data.prices.map((price) =>
            new Date(price[0]).toLocaleDateString()
          ),
          datasets: [
            {
              label: `${selectedCoin.toUpperCase()} Price`,
              data: response.data.prices.map((price) => price[1]),
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              fill: true,
            },
          ],
        };

        setChartData(chartData);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchChartData();
  }, [selectedCoin]);

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300 mb-8">
        Market Data
      </h1>

      {/* Market Trends Section */}
      <div className="bg-gray-800/40 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-700 mb-8">
        <h2 className="text-xl font-semibold text-gray-200 mb-6">Market Trends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cryptocurrencies.map((crypto) => (
            <div
              key={crypto.id}
              className="p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-blue-500 transition-all"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-2xl">
                  {crypto.symbol === "btc" ? (
                    <FaBitcoin className="text-yellow-400" />
                  ) : crypto.symbol === "eth" ? (
                    <FaEthereum className="text-purple-400" />
                  ) : (
                    <span className="text-blue-400">
                      {crypto.symbol.toUpperCase()}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-100">
                    {crypto.name}
                  </h3>
                  <p className="text-sm text-gray-400">{crypto.symbol}</p>
                </div>
              </div>
              <p className="text-xl font-bold text-gray-100">
                ${crypto.price.toLocaleString()}
              </p>
              <p
                className={`text-sm ${
                  crypto.change > 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {crypto.change > 0 ? <FaArrowUp /> : <FaArrowDown />}
                {Math.abs(crypto.change).toFixed(2)}%
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Price Charts Section */}
      <div className="mb-8">
        <div className="bg-gray-800/40 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300">
                {selectedCoin.toUpperCase()} Price Trend
              </h2>
              <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium border border-blue-500">
                7-Day Chart
              </span>
            </div>
            <select
              value={selectedCoin}
              onChange={(e) => setSelectedCoin(e.target.value)}
              className="px-4 py-2 border-2 border-gray-600 rounded-xl bg-gray-800 text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 transition-all"
            >
              {cryptocurrencies.map((crypto) => (
                <option key={crypto.id} value={crypto.id} className="bg-gray-800">
                  {crypto.name} ({crypto.symbol.toUpperCase()})
                </option>
              ))}
            </select>
          </div>

          <div className="h-96 bg-gray-900/20 rounded-xl border border-gray-700 p-4">
            {chartData.labels ? (
              <Line
                data={{
                  ...chartData,
                  datasets: chartData.datasets.map((dataset) => ({
                    ...dataset,
                    borderColor: "#60a5fa",
                    backgroundColor: "rgba(96, 165, 250, 0.1)",
                    borderWidth: 2,
                    pointRadius: 3,
                    pointBackgroundColor: "#60a5fa",
                    tension: 0.4,
                    fill: true,
                  })),
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { display: false },
                    tooltip: {
                      backgroundColor: "#1e3a8a",
                      titleColor: "#fff",
                      bodyColor: "#fff",
                      borderColor: "#3b82f6",
                      borderWidth: 1,
                      displayColors: false,
                      callbacks: {
                        title: () => "",
                        label: (context) => {
                          const value = context.parsed.y || 0;
                          return `$${value.toFixed(2)}`;
                        },
                      },
                    },
                  },
                  scales: {
                    x: {
                      grid: { display: false },
                      ticks: { color: "#94a3b8" },
                    },
                    y: {
                      grid: { color: "#1e293b" },
                      ticks: {
                        color: "#94a3b8",
                        callback: (value) => `$${value}`,
                      },
                    },
                  },
                }}
              />
            ) : (
              <div className="h-full flex items-center justify-center space-y-2">
                <div className="animate-pulse">
                  <div className="h-3 w-48 bg-gray-700 rounded mb-2"></div>
                  <div className="h-3 w-32 bg-gray-700 rounded"></div>
                </div>
              </div>
            )}
          </div>

          {/* Additional Stats */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700">
              <p className="text-sm text-gray-400">Current Price</p>
              <p className="text-xl font-bold text-blue-400">$34,500.00</p>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700">
              <p className="text-sm text-gray-400">24h Change</p>
              <p className="text-xl font-bold text-green-400">+2.45% ↗</p>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700">
              <p className="text-sm text-gray-400">7D High</p>
              <p className="text-xl font-bold text-blue-400">$35,200.00</p>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700">
              <p className="text-sm text-gray-400">7D Low</p>
              <p className="text-xl font-bold text-blue-400">$33,800.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cryptocurrencies Table */}
      <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-gray-700">
        <table className="min-w-full">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                24h Change
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                24h Volume
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {cryptocurrencies.map((crypto) => (
              <tr
                key={crypto.id}
                className="hover:bg-gray-800/30 transition-colors"
              >
                <td className="px-6 py-4 text-sm text-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="text-xl">
                      {crypto.symbol === "btc" ? (
                        <FaBitcoin className="text-yellow-400" />
                      ) : crypto.symbol === "eth" ? (
                        <FaEthereum className="text-purple-400" />
                      ) : (
                        <span className="text-blue-400">
                          {crypto.symbol.toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold">{crypto.name}</p>
                      <p className="text-xs text-gray-400">{crypto.symbol}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-100">
                  ${crypto.price.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      crypto.change > 0
                        ? "bg-green-900/30 text-green-400"
                        : "bg-red-900/30 text-red-400"
                    }`}
                  >
                    {crypto.change > 0 ? <FaArrowUp /> : <FaArrowDown />}
                    {Math.abs(crypto.change).toFixed(2)}%
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-100">
                  ${crypto.volume.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-100">
                  ${crypto.marketCap.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketData;