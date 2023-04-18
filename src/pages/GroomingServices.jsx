import Header from "../components/Header";

function GroomingSercives() {
  return (
    <div>
      <Header title={"Servicios de peluqueria"} />
      <div className="container-cards">
        <ul className="container">
          <li>
            Anestesiología: Proporciona sedación y analgesia a los pacientes
            durante cirugías y procedimientos.
          </li>
          <li>
            Corte de pelo: Los estilistas de la peluquería pueden cortar el pelo
            del perro en diferentes estilos y longitudes según la preferencia
            del dueño.
          </li>
          <li>
            Baño: Los perros pueden recibir un baño relajante y completo, que
            incluye champú y acondicionador para suavizar el pelo y eliminar la
            suciedad y los malos olores.
          </li>
          <li>
            Corte de uñas: Los profesionales pueden cortar las uñas de los
            perros para prevenir lesiones y problemas de salud.
          </li>
          <li>
            Limpieza de oídos: La peluquería también puede ofrecer servicios de
            limpieza de oídos para reducir la acumulación de cerumen y evitar
            infecciones.
          </li>
          <li>
            ratamientos para la piel y el pelaje: Algunas peluquerías también
            ofrecen tratamientos especiales para mejorar la salud y la
            apariencia del pelaje y la piel de los perros, como hidratación
            profunda, desenredado y eliminación de pulgas y garrapatas.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GroomingSercives;
