import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Repositories from "./pages/Repositories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repos/:username" element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
