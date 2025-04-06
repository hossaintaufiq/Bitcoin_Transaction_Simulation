// import { FaCoins, FaWallet, FaExchangeAlt } from "react-icons/fa";

// const Wallets = () => {
//   // Static data for My Assets
//   const assets = [
//     {
//       id: 1,
//       name: "BitCoin",
//       amount: 0.0164851,
//       value: 0.04,
//     },
//     {
//       id: 2,
//       name: "1MBABYDOGE",
//       amount: 6.0,
//       value: 0.01,
//     },
//   ];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Wallets</h1>

      

//       {/* Estimated Balance Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//         <h2 className="text-xl font-semibold text-gray-700 mb-4">
//           Estimated Balance
//         </h2>
//         <p className="text-2xl font-bold text-gray-800">
//           0.04863102 <span className="text-blue-500">USDT</span>
//         </p>
//         <p className="text-gray-600">$0.05</p>
//         <p className="text-sm text-gray-500 mt-2">
//           Today’s Pnt. <span className="text-red-500">$0.00 (-3.80%)</span>
//         </p>
//       </div>
//       {/* Deposit | Withdraw | Transfer Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//         <div className="flex space-x-4">
//           <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
//             <FaCoins className="mr-2" />
//             Deposit
//           </button>
//           <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
//             <FaWallet className="mr-2" />
//             Withdraw
//           </button>
//           <button className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
//             <FaExchangeAlt className="mr-2" />
//             Transfer
//           </button>
//         </div>
//       </div>

//       {/* My Assets Section */}
//       <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
//         <h2 className="text-xl font-semibold text-gray-700 p-6">My Assets</h2>
//         <table className="min-w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Coin
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Amount
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Value
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {assets.map((asset) => (
//               <tr key={asset.id} className="hover:bg-gray-50 transition-colors">
//                 <td className="px-6 py-4 text-sm text-gray-900">
//                   <div className="flex items-center space-x-3">
//                     <div>
//                       <p className="font-semibold">{asset.name}</p>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 text-sm text-gray-900">
//                   {asset.amount}
//                 </td>
//                 <td className="px-6 py-4 text-sm text-gray-900">
//                   ${asset.value}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Hide Assets and Today’s Pnt. Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <div className="flex items-center space-x-4">
//           <input
//             type="checkbox"
//             className="form-checkbox h-4 w-4 text-blue-500 rounded"
//           />
//           <p className="text-sm text-gray-700">Hide assets 1 USD</p>
//         </div>
//         <div className="mt-4">
//           <p className="text-sm text-gray-700">
//             Today’s Pnt. <span className="text-green-500">+ $0.00</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Wallets;



import { FaCoins, FaWallet, FaExchangeAlt } from "react-icons/fa";

const Wallets = () => {
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
    <div className="p-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300 mb-8">
        Wallets
      </h1>

      {/* Estimated Balance Section */}
      <div className="bg-gray-800/40 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-700 mb-8">
        <h2 className="text-xl font-semibold text-gray-200 mb-4">
          Estimated Balance
        </h2>
        <p className="text-2xl font-bold text-gray-100">
          0.04863102 <span className="text-blue-400">USDT</span>
        </p>
        <p className="text-gray-400">$0.05</p>
        <p className="text-sm text-gray-400 mt-2">
          Today’s Pnt. <span className="text-red-400">$0.00 (-3.80%)</span>
        </p>
      </div>

      {/* Action Buttons Section */}
      <div className="bg-gray-800/40 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-700 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <button className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all">
            <FaCoins className="mr-2 text-lg" />
            Deposit
          </button>
          <button className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl hover:from-green-700 hover:to-blue-700 transition-all">
            <FaWallet className="mr-2 text-lg" />
            Withdraw
          </button>
          <button className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all">
            <FaExchangeAlt className="mr-2 text-lg" />
            Transfer
          </button>
        </div>
      </div>

      {/* My Assets Section */}
      <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-gray-700 mb-8">
        <h2 className="text-xl font-semibold text-gray-200 p-6">My Assets</h2>
        <table className="min-w-full">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                Coin
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {assets.map((asset) => (
              <tr key={asset.id} className="hover:bg-gray-800/30 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-100">
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="font-semibold">{asset.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-100">
                  {asset.amount}
                </td>
                <td className="px-6 py-4 text-sm text-gray-100">
                  ${asset.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Settings Section */}
      <div className="bg-gray-800/40 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-700">
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-400 rounded border-gray-600 bg-gray-700 focus:ring-blue-500"
          />
          <p className="text-sm text-gray-300">Hide assets 1 USD</p>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-300">
            Today’s Pnt. <span className="text-green-400">+ $0.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wallets;