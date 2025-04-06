
import { FaChartLine, FaWallet, FaUsers, FaCog,  FaPowerOff } from "react-icons/fa";
import { useState, useContext } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
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

  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => navigate("/signIn"))
      .catch(error => console.error(error));
  };

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      {/* Desktop Sidebar */}
      <div className="bg-[#1e293b] w-64 flex-shrink-0 hidden md:block">
        <div className="p-6 border-b border-[#334155]">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-6">
          {["Analytics", "wallets", "transactions", "settings", "logout"].map((section) => (
            <button
              key={section}
              onClick={() => section === "logout" ? handleLogout() : setActiveSection(section)}
              className={`flex items-center w-full px-6 py-2 hover:bg-[#334155] hover:text-white ${
                activeSection === section ? "bg-[#334155] text-white" : "text-gray-300"
              } ${section === "logout" ? "hover:text-red-400" : ""}`}
            >
              {section === "Analytics" && <FaChartLine className="mr-3" />}
              {section === "wallets" && <FaWallet className="mr-3" />}
              {section === "transactions" && <FaUsers className="mr-3" />}
              {section === "settings" && <FaCog className="mr-3" />}
              {section === "logout" && <FaPowerOff className="mr-3" />}
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="md:hidden fixed inset-0 bg-[#1e293b] w-3/4 p-6 z-40">
          <nav className="mt-6">
            {["Analytics", "wallets", "transactions", "settings", "logout"].map((section) => (
              <button
                key={section}
                onClick={() => {
                  if (section === "logout") {
                    handleLogout();
                  } else {
                    setActiveSection(section);
                  }
                  setIsSidebarOpen(false);
                }}
                className="block w-full px-6 py-2 text-gray-300 hover:bg-[#334155] text-left"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden mt-12 md:mt-0">
        <header className="bg-[#1e293b] shadow-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Welcome, Taufiq</h2>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          {activeSection === "Analytics" ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[#1e293b] p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">Total Revenue</h3>
                  <p className="text-3xl font-bold text-blue-400 mt-2">$12,345</p>
                </div>
                <div className="bg-[#1e293b] p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">Balance</h3>
                  <p className="text-3xl font-bold text-green-400 mt-2">$1,234</p>
                </div>
                <div className="bg-[#1e293b] p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">Transactions</h3>
                  <p className="text-3xl font-bold text-purple-400 mt-2">567</p>
                </div>
              </div>

              <div className="mt-8 bg-[#1e293b] p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Weekly Transactions</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyTransactions}>
                    <XAxis dataKey="day" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155' }} labelStyle={{ color: '#94a3b8' }} />
                    <Bar dataKey="transactions" fill="#60a5fa" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-8 bg-[#1e293b] p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Monthly Revenue Report</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyReport}>
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155' }} labelStyle={{ color: '#94a3b8' }} />
                    <Line type="monotone" dataKey="revenue" stroke="#34d399" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </>
          ) : activeSection === "wallets" ? (
            <Wallets />
          ) : activeSection === "transactions" ? (
            <LiveTransaction />
          ) : activeSection === "settings" ? (
            <div className="bg-[#1e293b] p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Settings</h3>
              <p>Account settings here</p>
            </div>
          ) : null}
        </main>
      </div>
    </div>
  );
};

export default DashBoard;
