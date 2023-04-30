import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Keyword from "./pages/Keyword";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/keyword" element={<Keyword />} />
    </Routes>
  );
}

export default App;
