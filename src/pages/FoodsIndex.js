import { Link } from "react-router-dom";

function FoodsIndex(props) {
  const loaded = () => {
    return props.foods.map((food) => (
      <div key={food._id} className="food">
        <Link to={`/foods/${food._id}`}>
          <h1>{food.name}</h1>
        </Link>
        <img src={food.image} alt={food.name} />
      </div>
    ));
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return loaded();
}

export default FoodsIndex;
