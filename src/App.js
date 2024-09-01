import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import LoginForm from "./components/LoginForm/LoginForm";
// import LoginSuccess from "./components/LoginForm/LoginSuccess";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebars/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <>
      <Navbar />
      <div className="d-none d-lg-block">
        <Sidebar />
      </div>
      <Routes>
        {/* <Route path="/" element={<LoginForm />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        <Route path="/login-success/:userID" element={<LoginSuccess />} /> */}
      </Routes>
    </>
  );
}

export default App;
