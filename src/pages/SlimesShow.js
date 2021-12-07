import { Link } from "react-router-dom";

function SlimesShow(props) {
  const id = props.match.params.id;
  const slimes = props.slimes;
  const slime = slimes.find((p) => p._id === id);

  const removeSlime = () => {
    props.deleteSlimes(slime._id);
    props.history.push("/");
  };

  return (
    <div className="slime">
      <img src={slime.image} alt={slime.name} />
      <h1>Name: {slime.name}</h1>
      <h1>Diet Type: {slime.dietType}</h1>
      <h1>Favorite Food: {slime.favFood}</h1>
      <h1>Favorite Toy: {slime.favToy}</h1>
      <h1>Agression: {slime.slimeType}</h1>
      <h2>Color: {slime.color}</h2>
      <Link to="/slimes/:id/edit">
        <button>Edit Slime</button>
      </Link>
    </div>
  );
}

export default SlimesShow;
