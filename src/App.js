import { Routes, Route, BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import logo from "./logo.svg";
import "./App.css";
import Calci from "./components/Calci.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/calci" element={<Calci />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
