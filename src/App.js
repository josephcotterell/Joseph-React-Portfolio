import "./App.css";
import {} from "react-router-dom";
import { BrowserRouter as Router, Routes, Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experince />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
