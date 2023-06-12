import { useParams } from "react-router-dom";
import { getDogById } from "../data";
import { useEffect, useState } from "react";

function Details() {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    getDogById(id).then((respons) => setItem(respons));
  }, [item]);

  if (!item) {
    return "Loading...";
  }
  return (
    <div>
      <img src={item.image} alt="foto-1" style={{ width: "50%" }} />
      <div className="data-dog">
        <h3>Nombre: {item.name}</h3>
        <p>Raza: {item.breed}</p>
        <p>Edad: {item.age}</p>
        <p>Nombre del propietario: {item.owner}</p>
        <p>Vacunas: {item.vaccines ? "✅" : "❌"}</p>
        {!item.vaccines && <button className="btn-vaccines">Vacunar</button>}
      </div>
      <button className="details">Ver mas detalles</button>
    </div>
  );
}

export default Details;
