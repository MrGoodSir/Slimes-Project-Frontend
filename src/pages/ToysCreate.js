import { useState } from "react";

function ToysCreate(props) {
  const [newForm, setNewForm] = useState({
    name: "",
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
      image: "",
    });
    props.history.push('/toys');
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
        <input type="submit" value="Create Toy" />
      </form>
    </section>
  );
}

export default ToysCreate;
