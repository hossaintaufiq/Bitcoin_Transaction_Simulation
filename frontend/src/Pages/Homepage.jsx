// import React from "react";

// import { Link } from "lucide-react";

const TradingDashboard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Fund Your Account Section */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Fund Your Account and Start Trading
          </h1>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-600">Your Estimated Balance ➔</p>
            <p className="text-2xl font-bold text-gray-800">0.05 USD* ~ $0.053/20245</p>
            <p className="text-sm text-gray-500 mt-2">Today’s Pnt. $0.00 (+1.93%)</p>
            <div className="mt-4 flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Live transactions
                
              </button>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
               Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Popular Coins Section */}
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Popular</h2>
          <div className="space-y-4">
            {[
              { name: "Bitcoin", symbol: "BTC", price: "$96,640.82", change: "-1.85%" },
              { name: "Ethereum", symbol: "ETH", price: "$2,776.11", change: "-1.16%" },
              { name: "BNB", symbol: "BNB", price: "$658.63", change: "-0.10%" },
              { name: "XRP", symbol: "XRP", price: "$2.59", change: "-1.18%" },
              { name: "Solana", symbol: "SOL", price: "$173.42", change: "-0.88%" },
            ].map((coin) => (
              <div key={coin.symbol} className="bg-gray-100 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-bold text-gray-800">{coin.name}</p>
                    <p className="text-sm text-gray-500">{coin.symbol}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-800">{coin.price}</p>
                    <p className={`text-sm ${coin.change.startsWith("-") ? "text-red-500" : "text-green-500"}`}>
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

      {/* News Section (Bottom) */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "ByBit CEO Ben Zhou Backs CZ’s Security Approach, Defends Withdrawal Decision",
              source: "ByBit",
            },
            {
              title: "CZ: My Guiding Principle is Always to Lean on The Safer Side",
              source: "CZ",
            },
            {
              title: "Ethereum News: Why Is Ethereum (ETH) Price Down Today? Key Factors Behind the Drop",
              source: "Ethereum News",
            },
            {
              title: "Bybit Hack Update: Lazarus Group Consolidates Stolen",
              source: "Bybit",
            },
          ].map((news, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <p className="text-lg font-bold text-gray-800">{news.title}</p>
              <p className="text-sm text-gray-500">{news.source}</p>
            </div>
          ))}
        </div>
        <button className="mt-4 text-blue-500 hover:text-blue-600 transition">
          View All News &gt;
        </button>
      </div>
    </div>
  );
};

export default TradingDashboard;