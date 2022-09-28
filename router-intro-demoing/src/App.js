import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Squibby from "./Components/Squibby/Squibby";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/squibby" element={<Squibby />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
