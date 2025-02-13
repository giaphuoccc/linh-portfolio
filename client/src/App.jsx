import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import './index.css';

import Home from "./component/Home/homePage";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen bg-black">
          <div className="fade-loader"></div>
        </div>
      ) : (
        <div className="fade-in">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      )}
    </Router>
  );
};

export default App;
