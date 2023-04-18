function Header(props) {
  const { title } = props;
  return (
    <div className="card-header">
      <div className="header">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Header;
