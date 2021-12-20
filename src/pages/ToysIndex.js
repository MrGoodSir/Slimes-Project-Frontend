import { Link } from "react-router-dom";

function ToysIndex(props) {
  const loaded = () => {
    return props.toys.map((toy) => (
      <div key={toy._id} className="toy">
          <h1>{toy.name}</h1>
        <Link to={`/toys/${toy._id}`}>
        <img src={toy.image} alt={toy.name} />
        </Link>
      </div>
    ));
  };

  return props.toys ? loaded() : <h2>Loading Toys...</h2>
}

export default ToysIndex;
