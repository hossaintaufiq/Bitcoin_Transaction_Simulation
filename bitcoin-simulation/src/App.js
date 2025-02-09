// import logo from "./logo.svg";
import {BrowserRouter,Route} from "react-router-dom"
import Header from "./components/Header"
import "./App.css";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/> 
      <Route path ='/' Component={Homepage}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
