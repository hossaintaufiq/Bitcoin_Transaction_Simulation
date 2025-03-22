// import { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js';

// // Register Chart.js components
// Chart.register(...registerables);

// const TradeInterface = () => {
//   const [price, setPrice] = useState('584.89');
//   const [amount, setAmount] = useState('');
//   const [total, setTotal] = useState('');
//   const [orderType, setOrderType] = useState('limit');
//   const [tradeType, setTradeType] = useState('buy');
//   const [chartData, setChartData] = useState({ labels: [], datasets: [] });

//   // Fetch live Bitcoin price and chart data
//   useEffect(() => {
//     const fetchChartData = async () => {
//       try {
//         const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1');
//         const data = await response.json();
//         const prices = data.prices;
//         const labels = prices.map((price) => new Date(price[0]).toLocaleTimeString());
//         const dataset = {
//           label: 'BNB Price (USDT)',
//           data: prices.map((price) => price[1]),
//           borderColor: '#3b82f6',
//           fill: false,
//         };
//         setChartData({ labels, datasets: [dataset] });
//       } catch (error) {
//         console.error('Error fetching chart data:', error);
//       }
//     };

//     fetchChartData();
//     const interval = setInterval(fetchChartData, 60000); // Update chart every minute
//     return () => clearInterval(interval);
//   }, []);

//   const handleAmountChange = (e) => {
//     const value = e.target.value;
//     setAmount(value);
//     setTotal((value * price).toFixed(2));
//   };

//   const handleTotalChange = (e) => {
//     const value = e.target.value;
//     setTotal(value);
//     setAmount((value / price).toFixed(6));
//   };

//   return (
//     <div className="min-h-screen bg-white text-gray-900 p-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-2xl font-bold mb-6">BNB/USDT Trading</h1>

//         {/* Trading Pairs and Volumes */}
//         <div className="bg-gray-100 p-4 rounded-lg mb-6">
//           <div className="flex justify-between mb-4">
//             <span className="text-sm">Vol(BNB): 33.86K</span>
//             <span className="text-sm">Vol(USDT): 19.939M</span>
//           </div>
//           <div className="flex space-x-4">
//             <button className="text-sm font-semibold">Spot</button>
//             <button className="text-sm font-semibold">Cross</button>
//             <button className="text-sm font-semibold">Isolated</button>
//             <button className="text-sm font-semibold">Grid</button>
//           </div>
//         </div>

//         {/* Chart Section */}
//         <div className="bg-gray-100 p-6 rounded-lg mb-6">
//           <h2 className="text-xl font-bold mb-4">BNB Price Chart (Last 24 Hours)</h2>
//           <Line
//             data={chartData}
//             options={{
//               responsive: true,
//               plugins: {
//                 legend: { display: true },
//                 tooltip: { enabled: true },
//               },
//               scales: {
//                 x: { display: true, title: { display: true, text: 'Time' } },
//                 y: { display: true, title: { display: true, text: 'Price (USDT)' } },
//               },
//             }}
//           />
//         </div>

//         {/* Order Type Selector */}
//         <div className="bg-gray-100 p-4 rounded-lg mb-6">
//           <div className="flex space-x-4">
//             <button
//               className={`text-sm font-semibold ${orderType === 'limit' ? 'text-blue-600' : 'text-gray-700'}`}
//               onClick={() => setOrderType('limit')}
//             >
//               Limit
//             </button>
//             <button
//               className={`text-sm font-semibold ${orderType === 'market' ? 'text-blue-600' : 'text-gray-700'}`}
//               onClick={() => setOrderType('market')}
//             >
//               Market
//             </button>
//             <button
//               className={`text-sm font-semibold ${orderType === 'stop-limit' ? 'text-blue-600' : 'text-gray-700'}`}
//               onClick={() => setOrderType('stop-limit')}
//             >
//               Stop Limit
//             </button>
//           </div>
//         </div>

//         {/* Buy/Sell Panel */}
//         <div className="bg-gray-100 p-4 rounded-lg">
//           <div className="flex space-x-4 mb-4">
//             <button
//               className={`text-sm font-semibold ${tradeType === 'buy' ? 'text-green-600' : 'text-gray-700'}`}
//               onClick={() => setTradeType('buy')}
//             >
//               Buy BNB
//             </button>
//             <button
//               className={`text-sm font-semibold ${tradeType === 'sell' ? 'text-red-600' : 'text-gray-700'}`}
//               onClick={() => setTradeType('sell')}
//             >
//               Sell BNB
//             </button>
//           </div>
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm mb-2">Price (USDT)</label>
//               <input
//                 type="text"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//                 className="w-full p-2 rounded border border-gray-300"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-2">Amount (BNB)</label>
//               <input
//                 type="text"
//                 value={amount}
//                 onChange={handleAmountChange}
//                 className="w-full p-2 rounded border border-gray-300"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-2">Total (USDT)</label>
//               <input
//                 type="text"
//                 value={total}
//                 onChange={handleTotalChange}
//                 className="w-full p-2 rounded border border-gray-300"
//               />
//             </div>
//             <button
//               className={`w-full p-3 rounded-lg text-white font-semibold ${
//                 tradeType === 'buy' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
//               }`}
//             >
//               {tradeType === 'buy' ? 'Buy BNB' : 'Sell BNB'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TradeInterface;

// new code 
import { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register Chart.js components
Chart.register(...registerables);

const TradeInterface = () => {
  const [price, setPrice] = useState('584.89');
  const [amount, setAmount] = useState('');
  const [total, setTotal] = useState('');
  const [orderType, setOrderType] = useState('limit');
  const [tradeType, setTradeType] = useState('buy');
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  // Guide system state
  const [guideStep, setGuideStep] = useState(0);
  const [isGuideVisible, setIsGuideVisible] = useState(true);

  // Refs for the sections to highlight
  const chartRef = useRef(null);
  const orderTypeRef = useRef(null);
  const buySellPanelRef = useRef(null);

  // Guide steps configuration
  const guideSteps = [
    {
      message: "Welcome! Let's explore the trading interface.",
      ref: null, // No highlight for the first step
    },
    {
      message: "This is the price chart for BNB/USDT. You can see the latest price movements here.",
      ref: chartRef,
    },
    {
      message: "Here you can select the order type: Limit, Market, or Stop Limit.",
      ref: orderTypeRef,
    },
    {
      message: "This is the buy/sell panel. You can place your orders here.",
      ref: buySellPanelRef,
    },
  ];

  // Handle "Next" button click
  const handleNextStep = () => {
    if (guideStep < guideSteps.length - 1) {
      setGuideStep(guideStep + 1);
    } else {
      setIsGuideVisible(false); // End the guide
    }
  };

  // Fetch live Bitcoin price and chart data
  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1');
        const data = await response.json();
        const prices = data.prices;
        const labels = prices.map((price) => new Date(price[0]).toLocaleTimeString());
        const dataset = {
          label: 'BNB Price (USDT)',
          data: prices.map((price) => price[1]),
          borderColor: '#3b82f6',
          fill: false,
        };
        setChartData({ labels, datasets: [dataset] });
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchChartData();
    const interval = setInterval(fetchChartData, 60000); // Update chart every minute
    return () => clearInterval(interval);
  }, []);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    setTotal((value * price).toFixed(2));
  };

  const handleTotalChange = (e) => {
    const value = e.target.value;
    setTotal(value);
    setAmount((value / price).toFixed(6));
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      {/* Guide Overlay */}
      {isGuideVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50">
          {/* Highlight Box */}
          {guideSteps[guideStep].ref && (
            <div
              className="absolute border-2 border-white rounded-lg shadow-lg transition-all duration-500"
              style={{
                width: guideSteps[guideStep].ref.current?.offsetWidth,
                height: guideSteps[guideStep].ref.current?.offsetHeight,
                top: guideSteps[guideStep].ref.current?.offsetTop,
                left: guideSteps[guideStep].ref.current?.offsetLeft,
              }}
            ></div>
          )}

          {/* Guide Message */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-md text-center text-gray-800">
            {guideSteps[guideStep].message}
          </div>

          {/* Next Button */}
          <button
            className="absolute bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={handleNextStep}
          >
            {guideStep === guideSteps.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">BNB/USDT Trading</h1>

        {/* Trading Pairs and Volumes */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <div className="flex justify-between mb-4">
            <span className="text-sm">Vol(BNB): 33.86K</span>
            <span className="text-sm">Vol(USDT): 19.939M</span>
          </div>
          <div className="flex space-x-4">
            <button className="text-sm font-semibold">Spot</button>
            <button className="text-sm font-semibold">Cross</button>
            <button className="text-sm font-semibold">Isolated</button>
            <button className="text-sm font-semibold">Grid</button>
          </div>
        </div>

        {/* Chart Section */}
        <div ref={chartRef} className="bg-gray-100 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-4">BNB Price Chart (Last 24 Hours)</h2>
          <Line
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: { display: true },
                tooltip: { enabled: true },
              },
              scales: {
                x: { display: true, title: { display: true, text: 'Time' } },
                y: { display: true, title: { display: true, text: 'Price (USDT)' } },
              },
            }}
          />
        </div>

        {/* Order Type Selector */}
        <div ref={orderTypeRef} className="bg-gray-100 p-4 rounded-lg mb-6">
          <div className="flex space-x-4">
            <button
              className={`text-sm font-semibold ${orderType === 'limit' ? 'text-blue-600' : 'text-gray-700'}`}
              onClick={() => setOrderType('limit')}
            >
              Limit
            </button>
            <button
              className={`text-sm font-semibold ${orderType === 'market' ? 'text-blue-600' : 'text-gray-700'}`}
              onClick={() => setOrderType('market')}
            >
              Market
            </button>
            <button
              className={`text-sm font-semibold ${orderType === 'stop-limit' ? 'text-blue-600' : 'text-gray-700'}`}
              onClick={() => setOrderType('stop-limit')}
            >
              Stop Limit
            </button>
          </div>
        </div>

        {/* Buy/Sell Panel */}
        <div ref={buySellPanelRef} className="bg-gray-100 p-4 rounded-lg">
          <div className="flex space-x-4 mb-4">
            <button
              className={`text-sm font-semibold ${tradeType === 'buy' ? 'text-green-600' : 'text-gray-700'}`}
              onClick={() => setTradeType('buy')}
            >
              Buy BNB
            </button>
            <button
              className={`text-sm font-semibold ${tradeType === 'sell' ? 'text-red-600' : 'text-gray-700'}`}
              onClick={() => setTradeType('sell')}
            >
              Sell BNB
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Price (USDT)</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 rounded border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Amount (BNB)</label>
              <input
                type="text"
                value={amount}
                onChange={handleAmountChange}
                className="w-full p-2 rounded border border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Total (USDT)</label>
              <input
                type="text"
                value={total}
                onChange={handleTotalChange}
                className="w-full p-2 rounded border border-gray-300"
              />
            </div>
            <button
              className={`w-full p-3 rounded-lg text-white font-semibold ${
                tradeType === 'buy' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              {tradeType === 'buy' ? 'Buy BNB' : 'Sell BNB'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeInterface;