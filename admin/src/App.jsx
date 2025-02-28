import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './index.css';

import Dashboard from "./component/Dashboard/Dashboard.jsx";
import LoginPage from "./component/Login/LoginPage.jsx";


const App = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log("AuthContext user:", user);
  }, [user]);

  return (
    <Router>
      <ToastContainer /> {/* 🔥 Đảm bảo toast luôn hiển thị */}
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <LoginPage />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
