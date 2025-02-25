
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
            { path: "/live-transactions", label: "Transactions" },
            { path: "/wallets", label: "Wallets" },
            { path: "/market", label: "Market Data" },
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
            { path: "/live-transactions", label: "Transactions" },
            { path: "/wallets", label: "Wallets" },
            { path: "/market", label: "Market Data" },
            // { path: "/send", label: "Send Bitcoin" },
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



// // new code 

// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated login state

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     closeMenu();
//   };

//   return (
//     <nav className="bg-black text-white w-full fixed top-0 z-50 shadow-lg">
//       <div className="p-6 mx-auto flex justify-between items-center h-16">
//         {/* Logo */}
//         <Link to="/" className="text-xl font-bold text-yellow-500">
//           Bitcoin Simulator
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 items-center">
//           {/* Show Home and Market Data if NOT logged in */}
//           {!isLoggedIn ? (
//             <>
//               <li>
//                 <Link to="/" className="hover:text-yellow-500">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/market" className="hover:text-yellow-500">
//                   Market Data
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/signin" className="hover:text-yellow-500">
//                   Sign In
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/signup" className="hover:text-yellow-500">
//                   Sign Up
//                 </Link>
//               </li>
//             </>
//           ) : (
//             // Show Wallets, Transactions, Profile if LOGGED IN
//             <>
//               <li>
//                 <Link to="/live-transactions" className="hover:text-yellow-500">
//                   Transactions
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/wallets" className="hover:text-yellow-500">
//                   Wallets
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/profile">
//                   <img
//                     src="https://via.placeholder.com/40"
//                     alt="Profile"
//                     className="w-10 h-10 rounded-full border-2 border-yellow-500"
//                   />
//                 </Link>
//               </li>
//               <li>
//                 <button
//                   onClick={handleLogout}
//                   className="hover:text-red-500 transition"
//                 >
//                   Logout
//                 </button>
//               </li>
//             </>
//           )}
//         </ul>

//         {/* Mobile Menu Button */}
//         <button onClick={toggleMenu} className="md:hidden text-yellow-500">
//           {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-16 left-0 w-full bg-black transition-all duration-300 ease-in-out ${
//           isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
//         } overflow-hidden md:hidden`}
//       >
//         <ul className="flex flex-col space-y-4 p-6">
//           {!isLoggedIn ? (
//             <>
//               <li>
//                 <Link
//                   to="/"
//                   className="block px-4 py-2 hover:text-yellow-500"
//                   onClick={closeMenu}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/market"
//                   className="block px-4 py-2 hover:text-yellow-500"
//                   onClick={closeMenu}
//                 >
//                   Market Data
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/signin"
//                   className="block px-4 py-2 hover:text-yellow-500"
//                   onClick={closeMenu}
//                 >
//                   Sign In
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/signup"
//                   className="block px-4 py-2 hover:text-yellow-500"
//                   onClick={closeMenu}
//                 >
//                   Sign Up
//                 </Link>
//               </li>
//             </>
//           ) : (
//             <>
//               <li>
//                 <Link
//                   to="/live-transactions"
//                   className="block px-4 py-2 hover:text-yellow-500"
//                   onClick={closeMenu}
//                 >
//                   Transactions
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/wallets"
//                   className="block px-4 py-2 hover:text-yellow-500"
//                   onClick={closeMenu}
//                 >
//                   Wallets
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/profile" className="block px-4 py-2" onClick={closeMenu}>
//                   <img
//                     src="https://via.placeholder.com/40"
//                     alt="Profile"
//                     className="w-10 h-10 rounded-full border-2 border-yellow-500"
//                   />
//                 </Link>
//               </li>
//               <li>
//                 <button
//                   onClick={handleLogout}
//                   className="block px-4 py-2 text-red-500 hover:text-red-600 transition"
//                 >
//                   Logout
//                 </button>
//               </li>
//             </>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;


// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import PropTypes from "prop-types";

// const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   // Logout function
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     navigate("/signin");
//   };

//   return (
//     <nav className="bg-black text-white w-full fixed top-0 z-50 shadow-lg">
//       <div className="p-6 mx-auto flex justify-between items-center h-16">
//         {/* Logo */}
//         <Link to="/" className="text-xl font-bold text-yellow-500">
//           Bitcoin Simulator
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 items-center">
//           {isLoggedIn ? (
//             // Show these links after signing in
//             <>
//               <li>
//                 <Link to="/profile" className="hover:text-yellow-500">
//                   Profile
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/live-transactions" className="hover:text-yellow-500">
//                   Live Transactions
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/wallets" className="hover:text-yellow-500">
//                   Wallets
//                 </Link>
//               </li>
//               <li>
//                 <button onClick={handleLogout} className="text-red-500 hover:text-red-600">
//                   Logout
//                 </button>
//               </li>
//             </>
//           ) : (
//             // Show these links before signing in
//             <>
//               <li>
//                 <Link to="/" className="hover:text-yellow-500">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/market" className="hover:text-yellow-500">
//                   Market Data
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/signin" className="hover:text-yellow-500">
//                   Sign In
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/signup" className="hover:text-yellow-500">
//                   Sign Up
//                 </Link>
//               </li>
//             </>
//           )}
//         </ul>

//         {/* Mobile Menu Button */}
//         <button onClick={toggleMenu} className="md:hidden text-yellow-500">
//           {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-16 left-0 w-full bg-black transition-all duration-300 ease-in-out ${
//           isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
//         } overflow-hidden md:hidden`}
//       >
//         <ul className="flex flex-col space-y-4 p-6">
//           {isLoggedIn ? (
//             <>
//               <li>
//                 <Link to="/profile" className="block px-4 py-2 hover:text-yellow-500" onClick={closeMenu}>
//                   Profile
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/live-transactions" className="block px-4 py-2 hover:text-yellow-500" onClick={closeMenu}>
//                   Live Transactions
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/wallets" className="block px-4 py-2 hover:text-yellow-500" onClick={closeMenu}>
//                   Wallets
//                 </Link>
//               </li>
//               <li>
//                 <button onClick={handleLogout} className="text-red-500 hover:text-red-600 block px-4 py-2">
//                   Logout
//                 </button>
//               </li>
//             </>
//           ) : (
//             <>
//               <li>
//                 <Link to="/" className="block px-4 py-2 hover:text-yellow-500" onClick={closeMenu}>
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/market" className="block px-4 py-2 hover:text-yellow-500" onClick={closeMenu}>
//                   Market Data
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/signin" className="block px-4 py-2 hover:text-yellow-500" onClick={closeMenu}>
//                   Sign In
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/signup" className="block px-4 py-2 hover:text-yellow-500" onClick={closeMenu}>
//                   Sign Up
//                 </Link>
//               </li>
//             </>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );


// };

// NavBar.propTypes = {
//   isLoggedIn: PropTypes.bool.isRequired,
//   setIsLoggedIn: PropTypes.func.isRequired,
// };

// export default NavBar;
