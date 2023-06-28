import { useEffect, useState } from "react";
import { getDogById } from "../data";
import { useParams } from "react-router-dom";

function Details() {
  let { id } = useParams();
  console.log(id);

  const [item, setItem] = useState({});
  console.log(item);
  useEffect(() => {
    getDogById(id).then((respuesta) => setItem(respuesta));
  }, [item]);

  console.log(item);
  return (
    <div className="card-dog">
      <img src={item.image} alt="foto-1" style={{ width: "50%" }} />
      <div className="data-dog">
        <h3>Nombre: {item.name}</h3>
        <p>Raza: {item.breed}</p>
        <p>Edad: {item.age}</p>
        <p>Nombre del propietario: {item.owner}</p>
        <p>Vacunas: {item.vaccines ? "✅" : "❌"}</p>
        {!item.vaccines && <button className="btn-vaccines">Vacunar</button>}
        <button className="details">Ver mas detalles</button>
      </div>
    </div>
  );
}

export default Details;
