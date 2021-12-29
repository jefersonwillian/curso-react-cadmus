function LayoutBase(props) {
  const { title, descrition } = props;
  return (
    <div className="container">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="descrition">
        <p>{descrition}</p>
      </div>
    </div>
  );
}

export default LayoutBase;
