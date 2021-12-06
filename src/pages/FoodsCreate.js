import { useState } from "react";
import { withRouter } from 'react-router-dom'

function FoodsCreate(props) {
  const [newForm, setNewForm] = useState({
    name: "",
    maxHarvest: "",
    foodType: "",
    decayTime: "",
    favoriteOf: "",
    image: "",
  });

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createFoods(newForm);
    setNewForm({
        name: "",
        maxHarvest: "",
        foodType: "",
        decayTime: "",
        favoriteOf: "",
        image: "",
    });
    props.history.push('/foods');
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="Food"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.maxHarvest}
          name="maxHarvest"
          placeholder="Max Harvest Amount"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.foodType}
          name="foodType"
          placeholder="Type of Food"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.decayTime}
          name="decayTime"
          placeholder="Decay Time"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.favoriteOf}
          name="favoriteOf"
          placeholder="Favorite of (which slime)"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input type="submit" value="Create Food" />
      </form>
    </section>
  );
}

export default withRouter(FoodsCreate);
