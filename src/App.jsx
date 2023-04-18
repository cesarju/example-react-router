import "./App.css";
import ListDogs from "./pages/ListDogs";
import { dogs } from "./data";

function App() {
  return (
    <div className="App">
      <ListDogs dataList={dogs} />
    </div>
  );
}

export default App;
