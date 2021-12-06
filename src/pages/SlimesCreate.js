import { useState } from "react";

function SlimesCreate(props) {
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
    props.createSlimes(newForm);
    setNewForm({
      name: "",
      image: "",
    });
    props.history.push('/slimes');
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
        <input type="submit" value="Create Slime" />
      </form>
    </section>
  );
}

export default SlimesCreate;
