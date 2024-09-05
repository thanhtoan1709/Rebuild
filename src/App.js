import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LoginSuccess from "./components/LoginForm/LoginSuccess";
import LoginForm from "./components/LoginForm/LoginForm";
import Products from "./Pages/Products";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Acs from "./Pages/Accessories";
import Bottom from "./Pages/Bottom";
import Top from "./Pages/Top";
import HandBag from "./Pages/Handbag";
import Sale from "./Pages/Sale";
import Collections from "./Pages/Collections";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Acs" element={<Acs />} />
        <Route path="/Bottom" element={<Bottom />} />
        <Route path="/Sale" element={<Sale />} />
        <Route path="/Collections" element={<Collections />} />
        <Route path="/Top" element={<Top />} />
        <Route path="/HandBag" element={<HandBag />} />
        {/* <Route path="/products/:id" element={<Product />} /> */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        <Route path="/login-success/:userID" element={<LoginSuccess />} />
      </Routes>
    </>
  );
}

export default App;
