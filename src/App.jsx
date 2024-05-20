import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<h1>login</h1>} />
          <Route path="/checkout" element={<h1>checkout</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
