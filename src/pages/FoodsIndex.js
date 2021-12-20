import { Link } from "react-router-dom";

function FoodsIndex(props) {
  const loaded = () => {
    return props.foods.map((food) => (
      <div key={food._id} className="food">
          <h1>{food.name}</h1>
        <Link to={`/foods/${food._id}`}>
        <img src={food.image} alt={food.name} />
        </Link>
      </div>
    ));
  };


  return props.foods ? loaded() : <h2>Loading Toys...</h2>
  
}

export default FoodsIndex;
