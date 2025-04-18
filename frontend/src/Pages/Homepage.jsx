// import { useEffect, useState } from "react";
// import axios from "axios";
// import FAQSection from "../Components/FAQSection";
// import { Link } from "react-router-dom";

// const TradingDashboard = () => {
//   const [popularCoins, setPopularCoins] = useState([]);
//   const [news, setNews] = useState([]);

//   // Fetch popular coins data from CoinGecko API
//   useEffect(() => {
//     const fetchPopularCoins = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.coingecko.com/api/v3/coins/markets",
//           {
//             params: {
//               vs_currency: "usd",
//               ids: "bitcoin,ethereum,bnb,ripple,solana",
//               order: "market_cap_desc",
//               per_page: 5,
//               page: 1,
//               sparkline: false,
//             },
//           }
//         );

//         const coinsData = response.data.map((coin) => ({
//           name: coin.name,
//           symbol: coin.symbol.toUpperCase(),
//           price: `$${coin.current_price.toLocaleString()}`,
//           change: coin.price_change_percentage_24h.toFixed(2) + "%",
//         }));

//         setPopularCoins(coinsData);
//       } catch (error) {
//         console.error("Error fetching popular coins data:", error);
//       }
//     };

//     fetchPopularCoins();
//   }, []);

//   // Fetch cryptocurrency news from CryptoCompare API
//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get(
//           "https://min-api.cryptocompare.com/data/v2/news/", // CryptoCompare News API
//           {
//             params: {
//               lang: "EN", // Language: English
//             },
//           }
//         );

//         const newsData = response.data.Data.slice(0, 4).map((article) => ({
//           title: article.title,
//           source: article.source_info.name,
//         }));

//         setNews(newsData);
//       } catch (error) {
//         console.error("Error fetching news data:", error);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       {/* Main Content Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left Side: Fund Your Account and News Section */}
//         <div className="lg:col-span-2">
//           {/* Fund Your Account Section */}
//           <h1 className="text-2xl font-bold text-gray-800 mb-4">
//             Lets Start Trading Simulation with Demo Balance
//           </h1>
//           <div className="bg-gray-100 p-4 rounded-lg">
//             <p className="text-gray-600">Your Estimated Balance ➔</p>
//             <p className="text-2xl font-bold text-gray-800">1000.0 USD*</p>
//             <p className="text-sm text-gray-500 mt-2">
//               Today’s Pnt. $0.00 (+1.93%)
//             </p>
//             <div className="mt-4 flex space-x-4">
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
//                 <Link to={"/trade"}>Trade</Link>
//               </button>
//               <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
//                 <Link to={"/market"}>Markets</Link>
//               </button>
//             </div>
//           </div>

//           {/* News Section */}
//           <div className="mt-8">
//             <h2 className="text-xl font-bold text-gray-800 mb-4">News</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
//               {news.map((article, index) => (
//                 <div key={index} className="bg-gray-100 p-4 rounded-lg">
//                   <p className="text-lg font-bold text-gray-800">
//                     {article.title}
//                   </p>
//                   <p className="text-sm text-gray-500">{article.source}</p>
//                 </div>
//               ))}
//             </div>
//             <button className="mt-4 text-blue-500 hover:text-blue-600 transition">
//               View All News &gt;
//             </button>
//           </div>
//         </div>

//         {/* Right Side: Popular Coins Section */}
//         <div className="lg:col-span-1">
//           <h2 className="text-xl font-bold text-gray-800 mb-4">
//             Popular Coins
//           </h2>
//           <div className="space-y-4">
//             {popularCoins.map((coin, index) => (
//               <div key={index} className="bg-gray-100 p-4 rounded-lg">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="text-lg font-bold text-gray-800">
//                       {coin.name}
//                     </p>
//                     <p className="text-sm text-gray-500">{coin.symbol}</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-lg font-bold text-gray-800">
//                       {coin.price}
//                     </p>
//                     <p
//                       className={`text-sm ${
//                         coin.change.startsWith("-")
//                           ? "text-red-500"
//                           : "text-green-500"
//                       }`}
//                     >
//                       {coin.change}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button className="mt-4 text-blue-500 hover:text-blue-600 transition">
//             View All SDI+ Coins &gt;
//           </button>
//         </div>
//       </div>

//       {/* YouTube Videos Section */}
//       <div className="mt-12">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Bitcoin Educational Content
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* First Row */}
//           <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
//             <iframe
//               className="w-full aspect-video"
//               src="https://www.youtube.com/embed/Gc2en3nHxA4"
//               title="Bitcoin Explained"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//             <div className="p-4">
//               <h3 className="font-bold text-gray-800 mb-2">
//                 How Bitcoin Works in 5 Minutes
//               </h3>
//               <p className="text-sm text-gray-600">TechQuickie</p>
//               <p className="text-xs text-gray-500 mt-2">
//                 2.1M views · 1 year ago
//               </p>
//             </div>
//           </div>

//           <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
//             <iframe
//               className="w-full aspect-video"
//               src="https://www.youtube.com/embed/bBC-nXj3Ng4"
//               title="Bitcoin Basics"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//             <div className="p-4">
//               <h3 className="font-bold text-gray-800 mb-2">
//                 Bitcoin Basics Explained
//               </h3>
//               <p className="text-sm text-gray-600">Andrei Jikh</p>
//               <p className="text-xs text-gray-500 mt-2">
//                 985K views · 6 months ago
//               </p>
//             </div>
//           </div>

//           <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
//             <iframe
//               className="w-full aspect-video"
//               src="https://www.youtube.com/embed/s4g1XFU8Gto"
//               title="Bitcoin Investment"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//             <div className="p-4">
//               <h3 className="font-bold text-gray-800 mb-2">
//                 Why Bitcoin Matters
//               </h3>
//               <p className="text-sm text-gray-600">Coin Bureau</p>
//               <p className="text-xs text-gray-500 mt-2">
//                 1.5M views · 8 months ago
//               </p>
//             </div>
//           </div>
//           {/* Second Row - NEW WORKING VIDEOS */}
//           <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
//             <iframe
//               className="w-full aspect-video"
//               src="https://www.youtube.com/embed/l9jOJk30eQs"
//               title="Bitcoin Technical Explanation"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//             <div className="p-4">
//               <h3 className="font-bold text-gray-800 mb-2">
//                 Bitcoin Technical Deep Dive
//               </h3>
//               <p className="text-sm text-gray-600">Bitcoin Magazine</p>
//               <p className="text-xs text-gray-500 mt-2">
//                 380K views · 2 years ago
//               </p>
//             </div>
//           </div>

//           {/* Fixed Video 2 */}
//           <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
//             <iframe
//               className="w-full aspect-video"
//               src="https://www.youtube.com/embed/bBC-nXj3Ng4"
//               title="Bitcoin Technicals"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//             <div className="p-4">
//               <h3 className="font-bold text-gray-800 mb-2">
//                 How Bitcoin Works Technically
//               </h3>
//               <p className="text-sm text-gray-600">3Blue1Brown</p>
//               <p className="text-xs text-gray-500 mt-2">
//                 4.2M views · 2 years ago
//               </p>
//             </div>
//           </div>

//           {/* Fixed Video 3 */}
//           <div className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
//             <iframe
//               className="w-full aspect-video"
//               src="https://www.youtube.com/embed/Y-w7SnQWwVA"
//               title="Bitcoin Basics"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//             <div className="p-4">
//               <h3 className="font-bold text-gray-800 mb-2">What is Bitcoin?</h3>
//               <p className="text-sm text-gray-600">TED-Ed</p>
//               <p className="text-xs text-gray-500 mt-2">
//                 2.8M views · 3 years ago
//               </p>
//             </div>
//           </div>
//         </div>
//         <button className="mt-6 text-blue-500 hover:text-blue-600 transition">
//           View All Videos &gt;
//         </button>
//       </div>

//       {/* Keep your existing FAQSection below */}
//       <FAQSection />
//     </div>
//   );
// };

// export default TradingDashboard;


// new code 
import { useEffect, useState } from "react";
import axios from "axios";
import FAQSection from "../Components/FAQSection";
import { Link } from "react-router-dom";

const TradingDashboard = () => {
  const [popularCoins, setPopularCoins] = useState([]);
  const [news, setNews] = useState([]);

  // Fetch popular coins data from CoinGecko API
  useEffect(() => {
    const fetchPopularCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              ids: "bitcoin,ethereum,bnb,ripple,solana",
              order: "market_cap_desc",
              per_page: 5,
              page: 1,
              sparkline: false,
            },
          }
        );

        const coinsData = response.data.map((coin) => ({
          name: coin.name,
          symbol: coin.symbol.toUpperCase(),
          price: `$${coin.current_price.toLocaleString()}`,
          change: coin.price_change_percentage_24h.toFixed(2) + "%",
        }));

        setPopularCoins(coinsData);
      } catch (error) {
        console.error("Error fetching popular coins data:", error);
      }
    };

    fetchPopularCoins();
  }, []);

  // Fetch cryptocurrency news from CryptoCompare API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://min-api.cryptocompare.com/data/v2/news/",
          {
            params: {
              lang: "EN",
            },
          }
        );

        const newsData = response.data.Data.slice(0, 4).map((article) => ({
          title: article.title,
          source: article.source_info.name,
        }));

        setNews(newsData);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side: Fund Your Account and News Section */}
          <div className="lg:col-span-2">
            {/* Fund Your Account Section */}
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300 mb-6">
              Let s Start Trading Simulation with Demo Balance
            </h1>
            <div className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-lg border border-gray-700 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-lg">Your Estimated Balance ➔</p>
                  <p className="text-4xl font-bold text-white mt-2">1000.0 USD*</p>
                  <p className="text-sm text-gray-400 mt-3">
                    Today’s Pnt. $0.00 (+1.93%)
                  </p>
                </div>
                <div className="flex space-x-4">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <Link to={"/trade"} className="flex items-center">
                      <span className="mr-2">🚀</span> Trade
                    </Link>
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <Link to={"/market"} className="flex items-center">
                      <span className="mr-2">📈</span> Markets
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            {/* News Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">Latest News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {news.map((article, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800/40 p-6 rounded-xl hover:bg-gray-800/60 transition-all duration-300 border border-gray-700 hover:border-blue-500"
                  >
                    <p className="text-lg font-semibold text-white mb-2">
                      {article.title}
                    </p>
                    <p className="text-sm text-blue-400">{article.source}</p>
                  </div>
                ))}
              </div>
              <button className="mt-6 text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center">
                View All News
                <span className="ml-2 text-xl">→</span>
              </button>
            </div>
          </div>

          {/* Right Side: Popular Coins Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-6">Popular Coins</h2>
            <div className="space-y-4">
              {popularCoins.map((coin, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800/40 p-4 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-semibold text-white">{coin.name}</p>
                      <p className="text-sm text-gray-400">{coin.symbol}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-white">{coin.price}</p>
                      <p
                        className={`text-sm font-medium ${
                          coin.change.startsWith("-")
                            ? "text-red-400"
                            : "text-green-400"
                        }`}
                      >
                        {coin.change}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-6 text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center">
              View All SDI+ Coins
              <span className="ml-2 text-xl">→</span>
            </button>
          </div>
        </div>

        {/* YouTube Videos Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Bitcoin Educational Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Video Cards */}
            {[
              {
                src: "https://www.youtube.com/embed/Gc2en3nHxA4",
                title: "How Bitcoin Works in 5 Minutes",
                channel: "TechQuickie",
                views: "2.1M views · 1 year ago"
              },
              {
                src: "https://www.youtube.com/embed/bBC-nXj3Ng4",
                title: "Bitcoin Basics Explained",
                channel: "Andrei Jikh",
                views: "985K views · 6 months ago"
              },
              {
                src: "https://www.youtube.com/embed/s4g1XFU8Gto",
                title: "Why Bitcoin Matters",
                channel: "Coin Bureau",
                views: "1.5M views · 8 months ago"
              },
              {
                src: "https://www.youtube.com/embed/l9jOJk30eQs",
                title: "Bitcoin Technical Deep Dive",
                channel: "Bitcoin Magazine",
                views: "380K views · 2 years ago"
              },
              {
                src: "https://www.youtube.com/embed/bBC-nXj3Ng4",
                title: "How Bitcoin Works Technically",
                channel: "3Blue1Brown",
                views: "4.2M views · 2 years ago"
              },
              {
                src: "https://www.youtube.com/embed/Y-w7SnQWwVA",
                title: "What is Bitcoin?",
                channel: "TED-Ed",
                views: "2.8M views · 3 years ago"
              }
            ].map((video, index) => (
              <div 
                key={index}
                className="bg-gray-800/40 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500"
              >
                <iframe
                  className="w-full aspect-video"
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="p-4">
                  <h3 className="font-bold text-white mb-2">{video.title}</h3>
                  <p className="text-sm text-blue-400">{video.channel}</p>
                  <p className="text-xs text-gray-400 mt-2">{video.views}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-8 text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center">
            View All Videos
            <span className="ml-2 text-xl">→</span>
          </button>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <FAQSection />
        </div>
      </div>
    </div>
  );
};

export default TradingDashboard;