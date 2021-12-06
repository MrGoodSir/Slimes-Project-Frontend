import { useState } from "react";
import { withRouter } from 'react-router-dom'

function FoodsCreate(props) {
  const [newForm, setNewForm] = useState({
    name: "",
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
      image: "",
      title: "",
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
          placeholder="name"
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
