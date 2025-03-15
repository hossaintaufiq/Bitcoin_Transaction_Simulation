
import { FaChartLine, FaWallet, FaUsers, FaCog, FaBars } from "react-icons/fa";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import Wallets from "./Wallets";
import LiveTransaction from "./LiveTransaction";

const weeklyTransactions = [
  { day: "Mon", transactions: 50 },
  { day: "Tue", transactions: 80 },
  { day: "Wed", transactions: 60 },
  { day: "Thu", transactions: 90 },
  { day: "Fri", transactions: 120 },
  { day: "Sat", transactions: 40 },
  { day: "Sun", transactions: 75 },
];

const monthlyReport = [
  { month: "Jan", revenue: 5000 },
  { month: "Feb", revenue: 7000 },
  { month: "Mar", revenue: 6500 },
  { month: "Apr", revenue: 8000 },
  { month: "May", revenue: 9000 },
  { month: "Jun", revenue: 7500 },
  { month: "Jul", revenue: 8500 },
  { month: "Aug", revenue: 10000 },
  { month: "Sep", revenue: 9500 },
  { month: "Oct", revenue: 11000 },
  { month: "Nov", revenue: 12000 },
  { month: "Dec", revenue: 13000 },
];

const DashBoard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Analytics");

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 flex-shrink-0 hidden md:block">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-6">
          {["Analytics", "wallets", "transactions", "settings"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`flex items-center w-full px-6 py-2 text-gray-300 hover:bg-gray-700 hover:text-white ${
                activeSection === section ? "bg-gray-700 text-white" : ""
              }`}
            >
              {section === "Analytics" && <FaChartLine className="mr-3" />}
              {section === "wallets" && <FaWallet className="mr-3" />}
              {section === "transactions" && <FaUsers className="mr-3" />}
              {section === "settings" && <FaCog className="mr-3" />}
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center z-50">
        <h1 className="text-xl font-bold">Analytics</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <FaBars size={24} />
        </button>
      </div>
      {isSidebarOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 text-white w-3/4 p-6 z-40">
          <nav className="mt-6">
            {["Analytics", "wallets", "transactions", "settings"].map((section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  setIsSidebarOpen(false);
                }}
                className="block w-full px-6 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden mt-12 md:mt-0">
        <header className="bg-white shadow-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Welcome, Taufiq</h2>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          {activeSection === "Analytics" ? (
            <>
              {/* Dashboard Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-700">Total Revenue</h3>
                  <p className="text-3xl font-bold text-blue-600 mt-2">$12,345</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-700">Balance</h3>
                  <p className="text-3xl font-bold text-green-600 mt-2">$1,234</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-700">Transactions</h3>
                  <p className="text-3xl font-bold text-purple-600 mt-2">567</p>
                </div>
              </div>

              {/* Weekly Transactions Graph */}
              <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Weekly Transactions</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyTransactions}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="transactions" fill="#4F46E5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Monthly Revenue Report */}
              <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Monthly Revenue Report</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyReport}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </>
          ) : activeSection === "wallets" ? (
            <Wallets />
          ) : activeSection === "transactions" ? (
            <LiveTransaction />
          ) : activeSection === "settings" ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">Settings</h3>
              <p>Account settings here</p>
            </div>
          ) : null}
        </main>
      </div>
    </div>
  );
};

export default DashBoard;
