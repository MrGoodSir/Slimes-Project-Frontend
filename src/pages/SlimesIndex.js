import { Link } from "react-router-dom";

function SlimesIndex(props) {
  const loaded = () => {
    return props.slimes.map((slime) => (
      <div key={slime._id} className="slime">
        <Link to={`/slimes/${slime._id}`}>
          <h1>{slime.name}</h1>
        </Link>
        <img src={slime.image} alt={slime.name} />
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return props.slimes ? loaded() : loading();
}

export default SlimesIndex;
