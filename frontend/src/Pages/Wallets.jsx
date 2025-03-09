import { FaCoins, FaWallet, FaExchangeAlt } from "react-icons/fa";

const Wallets = () => {
  // Static data for My Assets
  const assets = [
    {
      id: 1,
      name: "BitCoin",
      amount: 0.0164851,
      value: 0.04,
    },
    {
      id: 2,
      name: "1MBABYDOGE",
      amount: 6.0,
      value: 0.01,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Wallets</h1>

      

      {/* Estimated Balance Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Estimated Balance
        </h2>
        <p className="text-2xl font-bold text-gray-800">
          0.04863102 <span className="text-blue-500">USDT</span>
        </p>
        <p className="text-gray-600">$0.05</p>
        <p className="text-sm text-gray-500 mt-2">
          Today’s Pnt. <span className="text-red-500">$0.00 (-3.80%)</span>
        </p>
      </div>
      {/* Deposit | Withdraw | Transfer Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            <FaCoins className="mr-2" />
            Deposit
          </button>
          <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            <FaWallet className="mr-2" />
            Withdraw
          </button>
          <button className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
            <FaExchangeAlt className="mr-2" />
            Transfer
          </button>
        </div>
      </div>

      {/* My Assets Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <h2 className="text-xl font-semibold text-gray-700 p-6">My Assets</h2>
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Coin
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {assets.map((asset) => (
              <tr key={asset.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="font-semibold">{asset.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {asset.amount}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  ${asset.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Hide Assets and Today’s Pnt. Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-500 rounded"
          />
          <p className="text-sm text-gray-700">Hide assets 1 USD</p>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-700">
            Today’s Pnt. <span className="text-green-500">+ $0.00</span>
          </p>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mt-8">
        <h2 className="text-xl font-semibold text-gray-700 p-6">
          Transactions
        </h2>
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
