import { useState } from "react";

function FoodsEdit(props) {
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
      props.history.push("/");
    };
  
    return (
      <div className="food">
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
            value={editForm.dietType}
            name="dietType"
            placeholder="Type of Diet"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.favFood}
            name="favFood"
            placeholder="Favorite Food"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.favToy}
            name="favToy"
            placeholder="Favorite Toy"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.foodType}
            name="foodType"
            placeholder="Additude"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.color}
            name="color"
            placeholder="Color"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.image}
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
          />
          <input type="submit" value="Update Food" />
        </form>
      </div>
    );
  }
  
  export default FoodsEdit;