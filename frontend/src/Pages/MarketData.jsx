
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

      {/* Price Charts Section */}
      <div className="mb-8 ">
        <div className="bg-white p-6 rounded-lg shadow-md ">
          <div className="flex justify-between items-center mb-4 ">
            <h2 className="text-xl font-semibold text-gray-700">
              {selectedCoin.toUpperCase()} Price Chart (Last 7 Days)
            </h2>
            <select
              value={selectedCoin}
              onChange={(e) => setSelectedCoin(e.target.value)}
              className="p-2 border rounded-lg"
            >
              {cryptocurrencies.map((crypto) => (
                <option key={crypto.id} value={crypto.id}>
                  {crypto.name} ({crypto.symbol})
                </option>
              ))}
            </select>
          </div>
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            {chartData.labels ? (
              <Line
                data={chartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            ) : (
              <span className="text-gray-500">Loading Chart...</span>
            )}
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
    </div>
  );
};

export default MarketData;

//  new code 
// import { FaBitcoin, FaEthereum, FaArrowUp, FaArrowDown } from "react-icons/fa";
// import { Line } from "react-chartjs-2";
// import axios from "axios";
// import { useEffect, useState, useRef } from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register ChartJS components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const MarketData = () => {
//   const [cryptocurrencies, setCryptocurrencies] = useState([]);
//   const [chartData, setChartData] = useState({});
//   const [selectedCoin, setSelectedCoin] = useState("bitcoin"); // Default to Bitcoin

//   // Guide system state
//   const [guideStep, setGuideStep] = useState(0);
//   const [isGuideVisible, setIsGuideVisible] = useState(true);

//   // Refs for the sections to highlight
//   const priceChartRef = useRef(null);
//   const cryptoTableRef = useRef(null);
//   const marketTrendsRef = useRef(null);

//   // Guide steps configuration
//   const guideSteps = [
//     {
//       message: "Welcome! Let's explore the market data.",
//       ref: null, // No highlight for the first step
//     },
//     {
//       message: "This is the price chart for the selected cryptocurrency.",
//       ref: priceChartRef,
//     },
//     {
//       message: "Here you can see a table of popular cryptocurrencies.",
//       ref: cryptoTableRef,
//     },
//     {
//       message: "This section shows market trends for top cryptocurrencies.",
//       ref: marketTrendsRef,
//     },
//   ];

//   // Handle "Next" button click
//   const handleNextStep = () => {
//     if (guideStep < guideSteps.length - 1) {
//       setGuideStep(guideStep + 1);
//     } else {
//       setIsGuideVisible(false); // End the guide
//     }
//   };

//   // Fetch live market data from CoinGecko API
//   useEffect(() => {
//     const fetchMarketData = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.coingecko.com/api/v3/coins/markets",
//           {
//             params: {
//               vs_currency: "usd",
//               ids: "bitcoin,ethereum,cardano,solana",
//               order: "market_cap_desc",
//               per_page: 10,
//               page: 1,
//               sparkline: false,
//             },
//           }
//         );

//         const data = response.data.map((crypto) => ({
//           id: crypto.id,
//           name: crypto.name,
//           symbol: crypto.symbol.toUpperCase(),
//           price: crypto.current_price,
//           change: crypto.price_change_percentage_24h,
//           volume: crypto.total_volume,
//           marketCap: crypto.market_cap,
//           icon:
//             crypto.symbol === "btc" ? (
//               <FaBitcoin className="text-yellow-500" />
//             ) : crypto.symbol === "eth" ? (
//               <FaEthereum className="text-purple-500" />
//             ) : (
//               <span className="text-blue-500">
//                 {crypto.symbol.toUpperCase()}
//               </span>
//             ),
//         }));

//         setCryptocurrencies(data);
//       } catch (error) {
//         console.error("Error fetching market data:", error);
//       }
//     };

//     fetchMarketData();
//   }, []);

//   // Fetch chart data for the selected coin
//   useEffect(() => {
//     const fetchChartData = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart`,
//           {
//             params: {
//               vs_currency: "usd",
//               days: "7",
//             },
//           }
//         );

//         const chartData = {
//           labels: response.data.prices.map((price) =>
//             new Date(price[0]).toLocaleDateString()
//           ),
//           datasets: [
//             {
//               label: `${selectedCoin.toUpperCase()} Price`,
//               data: response.data.prices.map((price) => price[1]),
//               borderColor: "rgba(75, 192, 192, 1)",
//               backgroundColor: "rgba(75, 192, 192, 0.2)",
//               fill: true,
//             },
//           ],
//         };

//         setChartData(chartData);
//       } catch (error) {
//         console.error("Error fetching chart data:", error);
//       }
//     };

//     fetchChartData();
//   }, [selectedCoin]);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Guide Overlay */}
//       {isGuideVisible && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50">
//           {/* Highlight Box */}
//           {guideSteps[guideStep].ref && (
//             <div
//               className="absolute border-2 border-white rounded-lg shadow-lg transition-all duration-500"
//               style={{
//                 width: guideSteps[guideStep].ref.current?.offsetWidth,
//                 height: guideSteps[guideStep].ref.current?.offsetHeight,
//                 top: guideSteps[guideStep].ref.current?.offsetTop,
//                 left: guideSteps[guideStep].ref.current?.offsetLeft,
//               }}
//             ></div>
//           )}

//           {/* Guide Message */}
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-md text-center text-gray-800">
//             {guideSteps[guideStep].message}
//           </div>

//           {/* Next Button */}
//           <button
//             className="absolute bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//             onClick={handleNextStep}
//           >
//             {guideStep === guideSteps.length - 1 ? "Finish" : "Next"}
//           </button>
//         </div>
//       )}

//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Market Data</h1>

//       {/* Price Charts Section */}
//       <div ref={priceChartRef} className="mb-8">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold text-gray-700">
//               {selectedCoin.toUpperCase()} Price Chart (Last 7 Days)
//             </h2>
//             <select
//               value={selectedCoin}
//               onChange={(e) => setSelectedCoin(e.target.value)}
//               className="p-2 border rounded-lg"
//             >
//               {cryptocurrencies.map((crypto) => (
//                 <option key={crypto.id} value={crypto.id}>
//                   {crypto.name} ({crypto.symbol})
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
//             {chartData.labels ? (
//               <Line
//                 data={chartData}
//                 options={{
//                   responsive: true,
//                   maintainAspectRatio: false,
//                   plugins: {
//                     legend: {
//                       display: false,
//                     },
//                   },
//                 }}
//               />
//             ) : (
//               <span className="text-gray-500">Loading Chart...</span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Cryptocurrencies Table */}
//       <div ref={cryptoTableRef} className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
//         <table className="min-w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Price
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 24h Change
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 24h Volume
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Market Cap
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {cryptocurrencies.map((crypto) => (
//               <tr
//                 key={crypto.id}
//                 className="hover:bg-gray-50 transition-colors"
//               >
//                 <td className="px-6 py-4 text-sm text-gray-900">
//                   <div className="flex items-center space-x-3">
//                     <div className="text-xl">{crypto.icon}</div>
//                     <div>
//                       <p className="font-semibold">{crypto.name}</p>
//                       <p className="text-xs text-gray-500">{crypto.symbol}</p>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 text-sm text-gray-900">
//                   ${crypto.price.toLocaleString()}
//                 </td>
//                 <td className="px-6 py-4 text-sm">
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                       crypto.change > 0
//                         ? "bg-green-100 text-green-800"
//                         : "bg-red-100 text-red-800"
//                     }`}
//                   >
//                     {crypto.change > 0 ? <FaArrowUp /> : <FaArrowDown />}
//                     {Math.abs(crypto.change).toFixed(2)}%
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 text-sm text-gray-900">
//                   ${crypto.volume.toLocaleString()}
//                 </td>
//                 <td className="px-6 py-4 text-sm text-gray-900">
//                   ${crypto.marketCap.toLocaleString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Market Trends Section */}
//       <div ref={marketTrendsRef} className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold text-gray-700 mb-4">
//           Market Trends
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {cryptocurrencies.map((crypto) => (
//             <div
//               key={crypto.id}
//               className="p-4 border rounded-lg hover:shadow-lg transition-shadow"
//             >
//               <div className="flex items-center space-x-3 mb-4">
//                 <div className="text-2xl">{crypto.icon}</div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {crypto.name}
//                   </h3>
//                   <p className="text-sm text-gray-500">{crypto.symbol}</p>
//                 </div>
//               </div>
//               <p className="text-xl font-bold text-gray-900">
//                 ${crypto.price.toLocaleString()}
//               </p>
//               <p
//                 className={`text-sm ${
//                   crypto.change > 0 ? "text-green-600" : "text-red-600"
//                 }`}
//               >
//                 {crypto.change > 0 ? <FaArrowUp /> : <FaArrowDown />}
//                 {Math.abs(crypto.change).toFixed(2)}%
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MarketData;