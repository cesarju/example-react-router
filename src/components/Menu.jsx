import { Link } from "react-router-dom";

function Menu() {
  return (
    <ul>
      <li>
        <Link to="/list-dogs">Lista perritos</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/hospital">Hospital</Link>
      </li>
      <li>
        <Link to="/grooming">Gooming</Link>
      </li>
    </ul>
  );
}

export default Menu;
