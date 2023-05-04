import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading";
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
      <Route path="/loading" element={<Loading />} />
    </Routes>
  );
}

export default App;
