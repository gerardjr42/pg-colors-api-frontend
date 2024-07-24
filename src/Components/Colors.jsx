import { useEffect, useState } from "react";
import Color from "./Color";

const API = import.meta.env.VITE_API_URL;
function Colors() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetch(`${API}/colors`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setColors(responseJSON);
      })
      .catch((error) => console.error(error))
  }, []);

  return (
    <>
    <section>
      <table>
        <thead>
          <tr>
            <th>Favorite</th>
            <th>See this color</th>
            <th>Swatch</th>
          </tr>
        </thead>
        <tbody>
          {colors.map((color) => {
            return <Color key={color.id} color={color} id={color.id}/>
          })}
        </tbody>
      </table>
    </section>
    </>
  )
}

export default Colors