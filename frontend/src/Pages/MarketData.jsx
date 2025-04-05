
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

// Register ChartJS components
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
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Market Data</h1>

        {/* Market Trends Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Market Trends
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cryptocurrencies.map((crypto) => (
            <div
              key={crypto.id}
              className="p-4 border rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-2xl">{crypto.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {crypto.name}
                  </h3>
                  <p className="text-sm text-gray-500">{crypto.symbol}</p>
                </div>
              </div>
              <p className="text-xl font-bold text-gray-900">
                ${crypto.price.toLocaleString()}
              </p>
              <p
                className={`text-sm ${
                  crypto.change > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {crypto.change > 0 ? <FaArrowUp /> : <FaArrowDown />}
                {Math.abs(crypto.change).toFixed(2)}%
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Price Charts Section*/}
      <div className="mb-8">
  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg border border-blue-100">
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {selectedCoin.toUpperCase()} Price Trend
        </h2>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          7-Day Chart
        </span>
      </div>
      <select
        value={selectedCoin}
        onChange={(e) => setSelectedCoin(e.target.value)}
        className="px-4 py-2 border-2 border-blue-200 rounded-xl bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
      >
        {cryptocurrencies.map((crypto) => (
          <option key={crypto.id} value={crypto.id}>
            <span className="flex items-center gap-2">
              <img 
                src={crypto.icon} 
                alt={crypto.name}
                className="w-5 h-5"
              />
              {crypto.name} ({crypto.symbol.toUpperCase()})
            </span>
          </option>
        ))}
      </select>
    </div>

    <div className="h-96 bg-gradient-to-br from-white to-blue-50 rounded-xl border border-blue-100 p-4">
      {chartData.labels ? (
        <Line
          data={{
            ...chartData,
            datasets: chartData.datasets.map(dataset => ({
              ...dataset,
              borderColor: '#3b82f6',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              borderWidth: 2,
              pointRadius: 3,
              pointBackgroundColor: '#3b82f6',
              tension: 0.4,
              fill: true
            }))
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: '#1e3a8a',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: '#3b82f6',
                borderWidth: 1,
                displayColors: false,
                callbacks: {
                  title: () => '',
                  label: (context) => {
                    const value = context.parsed.y || 0;
                    return `$${value.toFixed(2)}`;
                  }
                }
              }
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: '#64748b' }
              },
              y: {
                grid: { color: '#f1f5f9' },
                ticks: { 
                  color: '#64748b',
                  callback: (value) => `$${value}`
                }
              }
            }
          }}
        />
      ) : (
        <div className="h-full flex items-center justify-center space-y-2">
          <div className="animate-pulse">
            <div className="h-3 w-48 bg-blue-200 rounded mb-2"></div>
            <div className="h-3 w-32 bg-blue-200 rounded"></div>
          </div>
        </div>
      )}
    </div>

    {/* Additional Stats */}
    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-xl border border-blue-100">
        <p className="text-sm text-gray-500">Current Price</p>
        <p className="text-xl font-bold text-blue-600">$34,500.00</p>
      </div>
      <div className="bg-white p-4 rounded-xl border border-blue-100">
        <p className="text-sm text-gray-500">24h Change</p>
        <p className="text-xl font-bold text-green-500">+2.45% ↗</p>
      </div>
      <div className="bg-white p-4 rounded-xl border border-blue-100">
        <p className="text-sm text-gray-500">7D High</p>
        <p className="text-xl font-bold text-blue-600">$35,200.00</p>
      </div>
      <div className="bg-white p-4 rounded-xl border border-blue-100">
        <p className="text-sm text-gray-500">7D Low</p>
        <p className="text-xl font-bold text-blue-600">$33,800.00</p>
      </div>
    </div>
  </div>
</div>
      {/* Cryptocurrencies Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                24h Change
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                24h Volume
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {cryptocurrencies.map((crypto) => (
              <tr
                key={crypto.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div className="flex items-center space-x-3">
                    <div className="text-xl">{crypto.icon}</div>
                    <div>
                      <p className="font-semibold">{crypto.name}</p>
                      <p className="text-xs text-gray-500">{crypto.symbol}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  ${crypto.price.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      crypto.change > 0
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {crypto.change > 0 ? <FaArrowUp /> : <FaArrowDown />}
                    {Math.abs(crypto.change).toFixed(2)}%
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  ${crypto.volume.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
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

