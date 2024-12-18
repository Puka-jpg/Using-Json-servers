import "./index.css";
import Home from "./Home";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router";
import Create from "./Create";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/create" element={<Create />}></Route>
      </Routes>
    </>
  );
}

export default App;
