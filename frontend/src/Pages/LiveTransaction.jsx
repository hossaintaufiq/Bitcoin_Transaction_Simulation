
const LiveTransaction = () => {
  const transactions = [
    {
      id: "TX123458",
      amount: 0.05,
      status: "Completed",
      timestamp: "2023-10-01 12:34:56",
      from: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
      to: "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
    },
    {
      id: "TX654321",
      amount: 1.2,
      status: "Pending",
      timestamp: "2023-10-01 12:35:10",
      from: "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
      to: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    },
    {
      id: "TX789012",
      amount: 0.8,
      status: "Failed",
      timestamp: "2023-10-01 12:36:22",
      from: "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
      to: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300 mb-8">
        Transactions
      </h1>

      {/* Search and Filters */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by Transaction ID"
          className="px-4 py-3 bg-gray-800/40 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-400 flex-grow backdrop-blur-lg"
        />
        <select className="px-4 py-3 bg-gray-800/40 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 backdrop-blur-lg">
          <option value="">All Statuses</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all">
          Filter
        </button>
      </div>

      {/* Transactions Table */}
      <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-gray-700">
        <table className="min-w-full">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                Transaction ID
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                Amount (BTC)
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                Timestamp
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                From
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                To
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {transactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-gray-800/30 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-100 font-mono">{tx.id}</td>
                <td className="px-6 py-4 text-sm text-gray-100">{tx.amount}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      tx.status === "Completed"
                        ? "bg-green-900/30 text-green-400"
                        : tx.status === "Pending"
                        ? "bg-yellow-900/30 text-yellow-400"
                        : "bg-red-900/30 text-red-400"
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-400">{tx.timestamp}</td>
                <td className="px-6 py-4 text-sm text-gray-400 font-mono truncate max-w-[150px] hover:text-gray-200 transition-colors">
                  {tx.from}
                </td>
                <td className="px-6 py-4 text-sm text-gray-400 font-mono truncate max-w-[150px] hover:text-gray-200 transition-colors">
                  {tx.to}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveTransaction;