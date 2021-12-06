import { useState } from "react";
import { withRouter } from "react-router-dom";

function SlimesCreate(props) {
  const [newForm, setNewForm] = useState({
    name: "",
    dietType: "",
    favFood: "",
    favToy: "",
    slimeType: "",
    color: "",
    image: "",
  });

  const handleChange = (event) => {
    setNewForm({
      ...newForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createSlimes(newForm);
    setNewForm({
      name: "",
      dietType: "",
      favFood: "",
      favToy: "",
      slimeType: "",
      color: "",
      image: "",
    });
    props.history.push("/slimes");
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.dietType}
          name="dietType"
          placeholder="Type of Diet"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.favFood}
          name="favFood"
          placeholder="Favorite Food"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.favToy}
          name="favToy"
          placeholder="Favorite Toy"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.slimeType}
          name="slimeType"
          placeholder="Type of Slime"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.color}
          name="color"
          placeholder="Color"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input type="submit" value="Create Slime" />
      </form>
    </section>
  );
}

export default withRouter(SlimesCreate);
