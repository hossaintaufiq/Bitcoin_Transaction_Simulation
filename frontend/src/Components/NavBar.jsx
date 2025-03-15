
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
      <div className="p-6 mx-auto  flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-yellow-500">
          Bitcoin Simulator
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6  items-center">
          {[
            { path: "/", label: "Home" },
            { path: "/market", label: "Markets" },
            { path: "/trade", label: "Trade" },
            { path: "/signIn", label: "SignIn" },
            { path: "/signUp", label: "SignUp" },
            { path: "/profile", label: "Profile" },
          ].map(({ path, label }) => (
            <li key={path}>
              <Link to={path} className="hover:text-yellow-500">
                {label}
              </Link>
            </li>
          ))}
          {/* Profile Picture */}
          <li>
            <Link to="/profile">
              <img
                src="https://via.placeholder.com/40" // Replace with actual profile image URL
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-yellow-500"
              />
            </Link>
          </li>
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
            { path: "/trade", label: "Trade" },
            { path: "/signIn", label: "SignIn" },
            { path: "/signUp", label: "SignUp" },
            { path: "/profile", label: "Profile" },
          ].map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className="block px-4 py-2 hover:text-yellow-500"
                onClick={closeMenu}
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



