import { useState } from "react";
import { Link } from "react-router-dom";

function ToysIndex(props) {
  const loaded = () => {
    return props.toys.map((toy) => (
      <div key={toy._id} className="toy">
        <Link to={`/toys/${toy._id}`}>
          <h1>{toy.name}</h1>
        </Link>
        <img src={toy.image} alt={toy.name} />
      </div>
    ));
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return <section>{props.toys ? loaded() : loading()}</section>;
}

export default ToysIndex;
