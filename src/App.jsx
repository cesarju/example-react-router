import "./App.css";
// import ListDogs from "./pages/ListDogs";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
// import Hospitalization from "./pages/Hospitalization";
// import GroomingSercives from "./pages/GroomingServices";
import Menu from "./components/Menu";
import Details from "./pages/Details";
import { Suspense, lazy } from "react";

//npm i react-router-dom
const GroomingSercives = lazy(() => import("./pages/GroomingServices"));
const Hospitalization = lazy(() => import("./pages/Hospitalization"));
const ListDogs = lazy(() => import("./pages/ListDogs"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/hospital" element={<Hospitalization />} />
            <Route path="/grooming" element={<GroomingSercives />} />
            <Route path="/list-dogs" element={<ListDogs />} />
            <Route path="/list-dogs/:id" element={<Details />} />
            <Route path="*" element={<h1>Error 404</h1>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
