
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const TradeInterface = () => {
  const [amount, setAmount] = useState('');
  const [total, setTotal] = useState('');
  const [tradeType, setTradeType] = useState('buy');
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [demoBalance, setDemoBalance] = useState(1000.00);
  const [btcHolding, setBtcHolding] = useState(0);
  const [marketPrice, setMarketPrice] = useState(0);
  const [transactionHistory, setTransactionHistory] = useState([]);

  // Fetch live Bitcoin price and chart data
  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1');
        const data = await response.json();
        const prices = data.prices;
        const labels = prices.map((price) => new Date(price[0]).toLocaleTimeString());
        const dataset = {
          label: 'BTC Price (USDT)',
          data: prices.map((price) => price[1]),
          borderColor: '#3b82f6',
          fill: false,
        };
        setChartData({ labels, datasets: [dataset] });
        setMarketPrice(prices[prices.length - 1][1]);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchChartData();
    const interval = setInterval(fetchChartData, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setAmount(value);
      setTotal((value * marketPrice).toFixed(2));
    }
  };

  const handleTotalChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setTotal(value);
      setAmount((value / marketPrice).toFixed(6));
    }
  };

  const executeTrade = () => {
    const numericAmount = parseFloat(amount);
    const numericTotal = parseFloat(total);

    if (!numericAmount || numericAmount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    if (tradeType === 'buy') {
      if (numericTotal > demoBalance) {
        alert('Insufficient balance for this trade');
        return;
      }
      setDemoBalance(prev => prev - numericTotal);
      setBtcHolding(prev => prev + numericAmount);
    } else {
      if (numericAmount > btcHolding) {
        alert('Insufficient BTC holdings for this trade');
        return;
      }
      setDemoBalance(prev => prev + numericTotal);
      setBtcHolding(prev => prev - numericAmount);
    }

    // Record transaction
    setTransactionHistory(prev => [
      ...prev,
      {
        type: tradeType,
        amount: numericAmount,
        price: marketPrice,
        total: numericTotal,
        timestamp: new Date().toLocaleString()
      }
    ]);

    setAmount('');
    setTotal('');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">BTC/USDT Trading (Demo)</h1>

        {/* Balance Dashboard */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-600">Cash Balance</p>
              <p className="text-xl font-bold text-green-600">${demoBalance.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">BTC Holdings</p>
              <p className="text-xl font-bold">{btcHolding.toFixed(6)} BTC</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Current Price</p>
              <p className="text-xl font-bold">${marketPrice.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Portfolio Value</p>
              <p className="text-xl font-bold">
                ${(demoBalance + btcHolding * marketPrice).toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Price Chart */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-4">BTC Price Chart (24h)</h2>
          <div className="h-96">
            <Line
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { position: 'bottom' }
                },
                scales: {
                  x: { title: { display: true, text: 'Time' } },
                  y: { title: { display: true, text: 'Price (USDT)' } }
                }
              }}
            />
          </div>
        </div>

        {/* Trading Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex gap-4 mb-6">
              <button
                className={`flex-1 py-2 rounded ${tradeType === 'buy' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setTradeType('buy')}
              >
                Buy BTC
              </button>
              <button
                className={`flex-1 py-2 rounded ${tradeType === 'sell' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setTradeType('sell')}
              >
                Sell BTC
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Price (USDT)</label>
                <input
                  type="text"
                  value={marketPrice.toFixed(2)}
                  readOnly
                  className="w-full p-2 bg-gray-100 rounded border border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Amount (BTC)
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={handleAmountChange}
                  className="w-full p-2 rounded border border-gray-300"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Total (USDT)
                </label>
                <input
                  type="number"
                  value={total}
                  onChange={handleTotalChange}
                  className="w-full p-2 rounded border border-gray-300"
                  placeholder="0.00"
                />
              </div>
              <button
                onClick={executeTrade}
                className={`w-full py-3 rounded-lg font-bold ${
                  tradeType === 'buy' 
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-red-600 hover:bg-red-700 text-white'
                }`}
              >
                {tradeType === 'buy' ? 'Buy BTC' : 'Sell BTC'}
              </button>
            </div>
          </div>

          {/* Transaction History */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Transaction History</h2>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {transactionHistory.map((tx, index) => (
                <div
                  key={index}
                  className={`p-3 rounded ${
                    tx.type === 'buy' ? 'bg-green-50' : 'bg-red-50'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className={`font-semibold ${
                        tx.type === 'buy' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {tx.type.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-600 ml-2">
                        {tx.amount.toFixed(6)} BTC
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">${tx.total.toFixed(2)}</p>
                      <p className="text-xs text-gray-500">
                        @ ${tx.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{tx.timestamp}</p>
                </div>
              ))}
              {transactionHistory.length === 0 && (
                <p className="text-gray-500 text-center py-4">
                  No transactions yet
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeInterface;



