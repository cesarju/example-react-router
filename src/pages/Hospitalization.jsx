import Header from "../components/Header";

function Hospitalization() {
  return (
    <div>
      <Header title={"Especialidades para tratamientos"} />
      <ul>
        <li>
          Medicina interna: Se enfoca en el diagnóstico y tratamiento de
          enfermedades en órganos internos del cuerpo.
        </li>
        <li>Cardiología: Trata las enfermedades y trastornos del corazón.</li>
        <li>
          Neurología: Se enfoca en el diagnóstico y tratamiento de enfermedades
          neurológicas, incluyendo trastornos del cerebro y la médula espinal.
        </li>
        <li>
          Oncología: Se enfoca en el diagnóstico y tratamiento de cáncer en
          animales.
        </li>
        <li>
          Ortopedia: Se enfoca en el diagnóstico y tratamiento de lesiones y
          enfermedades musculoesqueléticas.
        </li>
        <li>
          Oftalmología: Trata enfermedades y trastornos del ojo y la visión.
        </li>
        <li>
          Dermatología: Se enfoca en el diagnóstico y tratamiento de
          enfermedades de la piel y las orejas.
        </li>
        <li>
          Cuidados intensivos: Proporciona atención especializada a pacientes
          críticamente enfermos.
        </li>
        <li>
          Anestesiología: Proporciona sedación y analgesia a los pacientes
          durante cirugías y procedimientos.
        </li>
      </ul>
    </div>
  );
}
export default Hospitalization;
