import { Link } from "react-router-dom";
function Card(props) {
  const { image, name, breed, id } = props;

  return (
    <div className="card-dog">
      <img src={image} alt="foto-1" style={{ width: "50%" }} />
      <div className="data-dog">
        <h3>Nombre: {name}</h3>
        <p>Raza: {breed}</p>
        <Link to={"/list-dogs/" + id}>
          <button className="details">Ver mas detalles</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
