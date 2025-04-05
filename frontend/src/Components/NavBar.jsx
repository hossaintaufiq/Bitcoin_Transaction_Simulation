

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FaBars, FaTimes, FaPowerOff } from "react-icons/fa"; // Added FaPowerOff
import { AuthContext } from "../providers/AuthProvider";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // New state for profile dropdown
  const { user, logOut } = useContext(AuthContext);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogOut = () => {
    logOut().then().catch();
    setIsProfileOpen(false); // Close profile dropdown after logout
  };

  return (
    <nav className="bg-black text-white w-full fixed top-0 z-50 shadow-lg">
      <div className="p-6 mx-auto flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-yellow-500">
          Bitcoin Simulator
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {[
            { path: "/", label: "Home" },
            { path: "/market", label: "Markets" },
            ...(user
              ? [
                  { path: "/trade", label: "Trade" },
                  { path: "/profile", label: "Profile" },
                ]
              : [
                  { path: "/signIn", label: "SignIn" },
                  { path: "/signUp", label: "SignUp" },
                ]),
          ].map(({ path, label }) => (
            <li key={path}>
              <Link to={path} className="hover:text-yellow-500">
                {label}
              </Link>
            </li>
          ))}
          
          {/* Profile Dropdown */}
          {user && (
            <li className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center focus:outline-none"
              >
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-yellow-500"
                />
              </button>
              
              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 text-black">
                  <button
                    onClick={handleLogOut}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center"
                  >
                    <FaPowerOff className="mr-2 text-red-500" />
                    <span>Log Out</span>
                  </button>
                </div>
              )}
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-yellow-500">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-full bg-black transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden md:hidden`}
      >
        <ul className="flex flex-col space-y-4 p-6">
          {[
            { path: "/", label: "Home" },
            { path: "/market", label: "Markets" },
            ...(user ? [
              { path: "/trade", label: "Trade" },
              { path: "/profile", label: "Profile" },
            ] : [
              { path: "/signIn", label: "SignIn" },
              { path: "/signUp", label: "SignUp" },
            ]),
            user && { path: "#", label: "Logout", icon: <FaPowerOff /> }
          ].map((item) => item && (
            <li key={item.path}>
              <Link
                to={item.path}
                className="block px-4 py-2 hover:text-yellow-500 flex items-center"
                onClick={item.label === "Logout" ? handleLogOut : closeMenu}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;