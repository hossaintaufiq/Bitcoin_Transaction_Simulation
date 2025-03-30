
// import React from "react";
//1st code 
const LiveTransaction = () => {
  // Sample transaction data
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
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Transactions</h1>

      {/* Search and Filters */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by Transaction ID"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
        />
        <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Statuses</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Filter
        </button>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount (BTC)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Timestamp
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                From
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                To
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-900">{tx.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{tx.amount}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      tx.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : tx.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{tx.timestamp}</td>
                <td className="px-6 py-4 text-sm text-gray-900 truncate max-w-[150px]">
                  {tx.from}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 truncate max-w-[150px]">
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