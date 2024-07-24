import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function ColorNewForm() {
  const navigate = useNavigate();
  const [color, setColor] = useState({
    name: "",
    is_favorite: null,
  })

  //Add a color. Redirect to the index value
  const addColor = () => {
    fetch(`${API}/colors`, {
      method: "POST",
      body: JSON.stringify(color),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(() => {
      navigate(`/colors`);
    })
    .catch((e) => console.error(e))
  }

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
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor();
  }

  return (
      <>
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
  );
}

export default ColorNewForm