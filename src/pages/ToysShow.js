function ToysShow(props) {
  const id = props.match.params.id;
  const toys = props.toys;
  const toy = toys.find((p) => p._id === id);

  const removeToy = () => {
      props.deleteToys(toy._id);
      props.history.push("/")
  }

  return (
    <div className="toy">
      <h1>{toy.name}</h1>
      <h2>{toy.title}</h2>
      <img src={toy.image} alt={toy.name} />
    </div>
  );
}

export default ToysShow;
