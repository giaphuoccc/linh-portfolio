import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";

import Home from "./component/Home/homePage";
import About from "./component/About/aboutPage";
import ProjectDetail from "./component/Home/projectDetail";
// import Cyhome from "./component/Details/Cyhome/CyhomeProject";
// import Pharmacity from "./component/Details/Pharmacity/PharmaProject";
// import ECOMerchant from "./component/Details/ECO/ECOProject";

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
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/cyhome" element={<Cyhome />} />
            <Route path="/pharmacity" element={<Pharmacity />} />
            <Route path="/eco-merchant" element={<ECOMerchant />} /> */}
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      )}
    </Router>
  );
};

export default App;
