import { Link } from "react-router-dom";

function Card(props) {
  const { item } = props;

  return (
    <div className="card-dog">
      <img src={item.image} alt="foto-1" style={{ width: "50%" }} />
      <div className="data-dog">
        <h3>Nombre: {item.name}</h3>
        <Link to={`/list-dogs/${item.id}`}>
          <button className="details">Ver mas detalles</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
