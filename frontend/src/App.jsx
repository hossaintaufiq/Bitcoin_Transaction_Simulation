import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import DashBoard from "./Pages/DashBoard";
import NavBar from "./Components/NavBar";
import MarketData from "./Pages/MarketData";
import Footer from "./Pages/Footer";
import Trade from "./Pages/Trade";
import SignUp from "./Authentication/SignUp";
import SignIn from "./Authentication/SignIn";
import PrivateRoute from "./routes/PrivateRoute";
// import login from "./Authentication/login";
// import registration from "./Authentication/registration";

// import { useState } from "react";

function App() {
  // const[isLoggedIn,setIsLoggedIn] =useState(false);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="pt-16 w-full min-h-[calc(100vh-8rem)]">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <DashBoard />
                </PrivateRoute>
              }
            />
            <Route path="/market" element={<MarketData />} />
            <Route path="registration" element={<registration />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route
              path="/trade"
              element={
                <PrivateRoute>
                  <Trade />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
