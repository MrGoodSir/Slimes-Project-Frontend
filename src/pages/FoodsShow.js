import { useState } from "react";

function FoodsShow(props) {
  const id = props.match.params.id;
  const foods = props.foods;
  const food = foods.find((p) => p._id === id);

  const [editForm, setEditForm] = useState(food);

  const handleChange = (event) => {
    setEditForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      props.updateFoods(editForm, food._id);
      props.history.push("/")
  }

  const removeFood = () => {
      props.deleteFoods(food._id);
      props.history.push("/")
  }

  return (
    <div className="food">
      <h1>{food.name}</h1>
      <h2>{food.title}</h2>
      <img src={food.image} alt={food.name} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input type="submit" value="Update Food" />
      </form>
    </div>
  );
}

export default FoodsShow;
