import { useState } from "react";

function SlimesShow(props) {
  const id = props.match.params.id;
  const slimes = props.slimes;
  const slime = slimes.find((p) => p._id === id);

  const [editForm, setEditForm] = useState(slime);

  const handleChange = (event) => {
    setEditForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      props.updateSlimes(editForm, slime._id);
      props.history.push("/")
  }

  const removeSlime = () => {
      props.deleteSlimes(slime._id);
      props.history.push("/")
  }

  return (
    <div className="slime">
      <img src={slime.image} alt={slime.name} />
      <h1>Name: {slime.name}</h1>
      <h1>Diet Type: {slime.dietType}</h1>
      <h1>Favorite Food: {slime.favFood}</h1>
      <h1>Favorite Toy: {slime.favToy}</h1>
      <h1>Agression: {slime.slimeType}</h1>
      <h2>Color: {slime.color}</h2>
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
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
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
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input type="submit" value="Update Slime" />
      </form>
    </div>
  );
}

export default SlimesShow;
