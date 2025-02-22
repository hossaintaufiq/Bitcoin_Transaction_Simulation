// import React from "react";
import { FaChartLine, FaWallet, FaUsers, FaCog } from "react-icons/fa";

const DashBoard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 flex-shrink-0">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-6">
          <a
            href="#"
            className="flex items-center px-6 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <FaChartLine className="mr-3" />
            Analytics
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <FaWallet className="mr-3" />
            Wallets
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <FaUsers className="mr-3" />
            Users
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <FaCog className="mr-3" />
            Settings
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Welcome, Taufiq</h2>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Notifications
              </button>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Total Revenue */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">
                Total Revenue
              </h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">$12,345</p>
              <p className="text-sm text-gray-500">+12% from last month</p>
            </div>

            {/* Card 2: Active Users */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">
                Active Users
              </h3>
              <p className="text-3xl font-bold text-green-600 mt-2">1,234</p>
              <p className="text-sm text-gray-500">+8% from last month</p>
            </div>

            {/* Card 3: Transactions */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">
                Transactions
              </h3>
              <p className="text-3xl font-bold text-purple-600 mt-2">567</p>
              <p className="text-sm text-gray-500">+5% from last month</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Sales Overview
              </h3>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Chart Placeholder</span>
              </div>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Recent Activity
              </h3>
              <ul>
                {[
                  {
                    id: 1,
                    activity: "New user registered",
                    time: "2 mins ago",
                  },
                  {
                    id: 2,
                    activity: "Transaction completed",
                    time: "10 mins ago",
                  },
                  { id: 3, activity: "Settings updated", time: "30 mins ago" },
                ].map((item) => (
                  <li key={item.id} className="border-b py-3">
                    <p className="text-gray-700">{item.activity}</p>
                    <p className="text-sm text-gray-500">{item.time}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashBoard;
