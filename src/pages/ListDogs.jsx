import { useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import { getDogs } from "../data";
import { useEffect } from "react";

function ListDogs() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    getDogs().then((respuesta) => setDataList(respuesta));
  }, []);

  return (
    <div className="lista-dogs">
      <Header title={"Pacientes"} />
      <div className="container-cards">
        {dataList.map((dataItem) => (
          <Card
            key={dataItem.id}
            id={dataItem.id}
            name={dataItem.name}
            age={dataItem.age}
            owner={dataItem.owner}
            breed={dataItem.breed}
            vaccines={dataItem.vaccines}
            image={dataItem.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ListDogs;
