import "./App.css";
import ListDogs from "./pages/ListDogs";
import { dogs } from "./data";
import AboutUs from "./pages/AboutUs";
import Hospitalization from "./pages/Hospitalization";
import GroomingServices from "./pages/GroomingServices";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            {" "}
            <a href="/hospital">Hospitalization</a>
          </li>
          <li>
            {" "}
            <a href="/pets">Lista de pacientes</a>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/hospital" element={<Hospitalization />} />
          <Route path="/services" element={<GroomingServices />} />
          <Route path="/pets" element={<ListDogs dataList={dogs} />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
