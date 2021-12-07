function FoodsShow(props) {
  const id = props.match.params.id;
  const foods = props.foods;
  const food = foods.find((p) => p._id === id);

  const removeFood = () => {
      props.deleteFoods(food._id);
      props.history.push("/")
  }

  return (
    <div className="food">
      <h1>{food.name}</h1>
      <h2>{food.title}</h2>
      <img src={food.image} alt={food.name} />
    </div>
  );
}

export default FoodsShow;
