import { useState } from "react";

function ToysShow(props) {
  const id = props.match.params.id;
  const toys = props.toys;
  const toy = toys.find((p) => p._id === id);

  const [editForm, setEditForm] = useState(toy);

  const handleChange = (event) => {
    setEditForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      props.updateToys(editForm, toy._id);
      props.history.push("/")
  }

  const removeToy = () => {
      props.deleteToys(toy._id);
      props.history.push("/")
  }

  return (
    <div className="toy">
      <h1>{toy.name}</h1>
      <h2>{toy.title}</h2>
      <img src={toy.image} alt={toy.name} />
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
        <input type="submit" value="Update Toy" />
      </form>
    </div>
  );
}

export default ToysShow;
