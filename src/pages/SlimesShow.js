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
      <h1>{slime.name}</h1>
      <h2>{slime.title}</h2>
      <img src={slime.image} alt={slime.name} />
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
        <input type="submit" value="Update Slime" />
      </form>
    </div>
  );
}

export default SlimesShow;
