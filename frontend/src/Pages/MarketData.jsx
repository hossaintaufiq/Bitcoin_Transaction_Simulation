// import React from "react";
import { FaBitcoin, FaEthereum, FaArrowUp, FaArrowDown } from "react-icons/fa";

const MarketData = () => {
  // Sample market data
  const cryptocurrencies = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: 45000,
      change: 2.5,
      icon: <FaBitcoin className="text-yellow-500" />,
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      price: 3000,
      change: -1.2,
      icon: <FaEthereum className="text-purple-500" />,
    },
    {
      id: 3,
      name: "Cardano",
      symbol: "ADA",
      price: 2.5,
      change: 0.8,
      icon: <span className="text-blue-500">ADA</span>,
    },
    {
      id: 4,
      name: "Solana",
      symbol: "SOL",
      price: 150,
      change: 3.7,
      icon: <span className="text-green-500">SOL</span>,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Market Data</h1>

      {/* Price Charts Section */}
      <div className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Bitcoin Price Chart
          </h2>
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Chart Placeholder</span>
          </div>
        </div>
      </div>

      {/* Market Trends Section */}
      <div className="mb-8">
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
                  {Math.abs(crypto.change)}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cryptocurrencies Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
                Market Cap
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Volume (24h)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {cryptocurrencies.map((crypto) => (
              <tr key={crypto.id} className="hover:bg-gray-50 transition-colors">
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
                    {Math.abs(crypto.change)}%
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  $1,000,000,000
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  $500,000,000
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