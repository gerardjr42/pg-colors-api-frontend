import { useState } from "react";
import Color from "./Color";

const API = import.meta.env.VITE_API_URL;
function Colors() {
  const [colors, setColors] = useState([]);

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
          {colors.map((color, index) => {
            return <Color key={index} color={color} index={index} />
          })}
        </tbody>
      </table>
    </section>
    </>
  )
}

export default Colors