import { useState } from "react";
import { withRouter } from 'react-router-dom'

function ToysCreate(props) {
  const [newForm, setNewForm] = useState({
    name: "",
    favoriteOf: "",
    price: "",
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
    props.createToys(newForm);
    setNewForm({
        name: "",
        favoriteOf: "",
        price: "",
        image: "",
    });
    props.history.push("/toys");
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
          value={newForm.favoriteOf}
          name="favoriteOf"
          placeholder="Favorite of (which slime)"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.price}
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input type="submit" value="Create Toy" />
      </form>
    </section>
  );
}

export default withRouter(ToysCreate);
