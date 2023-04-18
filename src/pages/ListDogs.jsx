import Card from "../components/Card";
import Header from "../components/Header";
function ListDogs(props) {
  const { dataList } = props;

  return (
    <div className="lista-dogs">
      <Header title={"Pacientes"} />
      <div className="container-cards">
        {dataList.map((dataItem) => (
          <Card
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
