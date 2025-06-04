import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Repositories from "./pages/Repositories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/github-repos-explorer" element={<Home />} />
        <Route path="/github-repos-explorer/repos/:username" element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
