// import React from "react";
import { FaBitcoin, FaEthereum, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Wallets = () => {
  // Sample wallet data
  const wallets = [
    {
      id: 1,
      name: "Bitcoin Wallet",
      symbol: "BTC",
      balance: 0.5,
      address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
      icon: <FaBitcoin className="text-yellow-500" />,
    },
    {
      id: 2,
      name: "Ethereum Wallet",
      symbol: "ETH",
      balance: 3.2,
      address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
      icon: <FaEthereum className="text-purple-500" />,
    },
    {
      id: 3,
      name: "Cardano Wallet",
      symbol: "ADA",
      balance: 500,
      address: "addr1q9...",
      icon: <span className="text-blue-500">ADA</span>,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Wallets</h1>

      {/* Wallet Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {wallets.map((wallet) => (
          <div
            key={wallet.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-3xl">{wallet.icon}</div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {wallet.name}
                </h2>
                <p className="text-sm text-gray-500">{wallet.symbol}</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {wallet.balance} {wallet.symbol}
            </p>
            <p className="text-sm text-gray-500 truncate">{wallet.address}</p>
            <div className="mt-4 flex space-x-4">
              <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                <FaArrowRight className="mr-2" />
                Send
              </button>
              <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                <FaArrowLeft className="mr-2" />
                Receive
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction ID
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              {
                id: 1,
                date: "2023-10-01",
                type: "Sent",
                amount: 0.1,
                status: "Completed",
                txId: "TX123456",
              },
              {
                id: 2,
                date: "2023-10-02",
                type: "Received",
                amount: 0.5,
                status: "Completed",
                txId: "TX654321",
              },
              {
                id: 3,
                date: "2023-10-03",
                type: "Sent",
                amount: 0.2,
                status: "Pending",
                txId: "TX789012",
              },
            ].map((tx) => (
              <tr key={tx.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-900">{tx.date}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{tx.type}</td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {tx.amount} BTC
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      tx.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 truncate max-w-[150px]">
                  {tx.txId}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wallets;