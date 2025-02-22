import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black text-white w-full fixed top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-yellow-500">
          Bitcoin Simulator
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {[
            { path: "/", label: "Home" },
            { path: "/live-transactions", label: "Live Transactions" },
            { path: "/wallets", label: "Wallets" },
            { path: "/market", label: "Market Data" },
            { path: "/dashboard", label: "Dashboard" },
          ].map(({ path, label }) => (
            <li key={path}>
              <Link to={path} className="hover:text-yellow-500">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-yellow-500">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Fixed Issue) */}
      <div
        className={`fixed top-16 left-0 w-full bg-black transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden md:hidden`}
      >
        <ul className="flex flex-col space-y-4 p-6">
          {[
            { path: "/", label: "Home" },
            { path: "/live-transactions", label: "Live Transactions" },
            { path: "/wallets", label: "Wallets" },
            { path: "/market", label: "Market Data" },
            { path: "/send", label: "Send Bitcoin" },
            { path: "/dashboard", label: "Dashboard" },
          ].map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className="block px-4 py-2 hover:text-yellow-500"
                onClick={closeMenu} // Closes menu on click
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
