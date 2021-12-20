import { Link } from "react-router-dom";

function SlimesIndex(props) {
  const loaded = () => {
    return props.slimes.map((slime) => (
      <div key={slime._id} className="slime">
          <h1>{slime.name}</h1>
        <Link to={`/slimes/${slime._id}`}>
        <img src={slime.image} alt={slime.name} />
        </Link>
      </div>
    ));
  };

  return props.slimes ? loaded() : <h2>Loading Toys...</h2>
}

export default SlimesIndex;
