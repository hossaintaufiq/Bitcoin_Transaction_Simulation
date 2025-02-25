import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import DashBoard from "./Pages/DashBoard";
import NavBar from "./Components/NavBar";
import LiveTransaction from "./Pages/LiveTransaction";
import Wallets from "./Pages/Wallets";
import MarketData from "./Pages/MarketData";
import Footer from "./Pages/Footer";
// import SignIn from "./Authentication/SignIn";
// import SignUp from "./Authentication/SignUp";
// import { useState } from "react";

function App() {

  // const[isLoggedIn,setIsLoggedIn] =useState(false);
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <div className="pt-16 w-full min-h-[calc(100vh-8rem)]">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<DashBoard/>} /> 
          <Route path="/live-transactions" element={<LiveTransaction/>} />
           <Route path="/wallets" element={<Wallets/>} /> 
          <Route path="/market" element={<MarketData/>} />

{/* 
          <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} /> */}
        {/* <Route path="/profile" element={isLoggedIn ? <DashBoard /> : <SignIn setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/live-transactions" element={isLoggedIn ? <LiveTransaction/>: <SignIn setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/wallets" element={isLoggedIn ? <Wallets/> : <SignIn setIsLoggedIn={setIsLoggedIn} />} /> */}
          
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
