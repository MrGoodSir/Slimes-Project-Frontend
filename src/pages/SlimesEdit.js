import { useState } from "react";

function SlimesEdit(props) {
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
      props.history.push("/");
    };
  
    return (
      <div className="slime">
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
            value={editForm.slimeType}
            name="slimeType"
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
          <input type="submit" value="Update Slime" />
        </form>
      </div>
    );
  }
  
  export default SlimesEdit;