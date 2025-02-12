import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./component/Home/homePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>

  )
}

export default App;
