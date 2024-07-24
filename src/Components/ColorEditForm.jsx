import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function ColorEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [color, setColor] = useState({
    name: "",
    is_favorite: null,
  })

  const updateColor = () => {
    fetch(`${API}/colors/${id}`, {
      method: "PUT",
      body: JSON.stringify(color),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/colors/${id}`);
      })
      .catch((e) => console.error("catch", e));
  };

  const handleTextChange = (e) => {
    setColor({
      ...color,
      [e.target.id]: e.target.value
    })
  }

  const handleCheckboxChange = () => {
    setColor({
      ...color,
      is_favorite: !color.is_favorite,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateColor();
  }


  return (
    <>
    <h2>Edit Form</h2>
    <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            value={color.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Color"
            required
          />
          <label htmlFor="is_favorite">Favorite:</label>
          <input
            id="is_favorite"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={color.is_favorite}
          />
          <br />
          <input type="submit" />
        </form>
    </>
  )
}

export default ColorEditForm