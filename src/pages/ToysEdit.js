import { useState } from "react";

function ToysEdit(props) {
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
      props.history.push("/");
    };
  
    return (
      <div className="toy">
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
            value={editForm.dietType}
            name="dietType"
            placeholder="Type of Diet"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.favtoy}
            name="favtoy"
            placeholder="Favorite toy"
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
            value={editForm.toyType}
            name="toyType"
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
          <input type="submit" value="Update Toy" />
        </form>
      </div>
    );
  }
  
  export default ToysEdit;