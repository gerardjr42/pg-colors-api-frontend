import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function ColorDetails() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [color, setColor] = useState({
    name: "",
    is_favorite: null,
  });
  const [isValidColor, setIsValidColor] = useState(true);
  
  //on page load, load color details
  useEffect(() => {
    fetch(`${API}/colors/${id}`)
    .then((response) => response.json())
    .then((resJSON) => {
      console.log(resJSON)
      setColor(resJSON)
    })
    .catch(() => {
      navigate("/notfound")
    })
  }, [id, navigate])
  
  useEffect(() => {
    const { name } = color;
    if(name) {
      setIsValidColor(CSS.supports("color", name.toLowerCase()));
    } else {
      setIsValidColor(false);
    }
  }, [color]);
  
  //Be able to delete a color. Return to id view.
  const handleDelete = () => {
    deleteColor();
  }

  const deleteColor = () => {
    fetch(`${API}/colors/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      navigate("/colors")
    })
    .catch((e) => console.error(e))
  }

  return (
    <>
    <article
      style={{backgroundColor: isValidColor ? color.name : "transparent"}}
      className={!isValidColor ? "no-such-color" : null}
    >
    <h3>
      {color.is_favorite ? <span>⭐</span> : null}
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      {color.name}
    </h3>
    <div className="showNavigation">
      <div>
        {" "}
        <Link to={`/colors`}>
          <button>Back</button>
        </Link>
      </div>
      <div>
        {" "}
        <Link to={`/colors/${id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <div>
        {" "}
        <button onClick={handleDelete}>Delete</button>
        {!isValidColor ? <h1>No such color</h1> : null}
      </div>
    </div>
    </article>
    </>
  )
}

export default ColorDetails