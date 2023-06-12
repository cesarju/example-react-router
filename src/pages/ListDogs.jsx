import Card from "../components/Card";
import Header from "../components/Header";
function ListDogs(props) {
  const { dataList } = props;

  return (
    <div className="lista-dogs">
      <Header title={"Pacientes"} />
      <div className="container-cards">
        {dataList.map((dataItem, index) => (
          <Card key={index} item={dataItem} />
        ))}
      </div>
    </div>
  );
}

export default ListDogs;
