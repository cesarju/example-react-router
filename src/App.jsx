import "./App.css";
// import ListDogs from "./pages/ListDogs";
import { getDogs } from "./data";
import { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
// import Details from "./pages/Details";

//npm i react-router-dom
//Realizar los enrutamientos con la libreria de react-router-dom
function App() {
  const [data, setData] = useState([]);

  const ListDogs = lazy(() => import("./pages/ListDogs"));
  const Details = lazy(() => import("./pages/Details"));

  /*   const location = useLocation();
  console.log(location); */

  useEffect(() => {
    getDogs().then((respuesta) => setData(respuesta));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/list-dogs"> List dog</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
        </ul>
        {ListDogs && (
          <Suspense fallback={<h2>Loading...</h2>}>
            {/* {location.pathname !== "*" && <error> Error</error>} */}
            <Routes>
              <Route path="/home" element={<h1>Soy un destino</h1>} />
              <Route path="/about" element={<h1>About</h1>} />
              <Route path="/list-dogs" element={<ListDogs dataList={data} />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </Suspense>
        )}

        {Details && (
          <Suspense fallback={<h1>Loading details dog...</h1>}>
            <Routes>
              <Route path="/list-dogs/:id" element={<Details />} />
            </Routes>
          </Suspense>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
