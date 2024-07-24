import React from 'react'
import { Link } from 'react-router-dom'

function Color({color, index}) {
  return (
    <>
      <tr>
        <td>
          {color.is_favorite ? (
            <span>⭐</span>
          ): (
            <span>&nbsp; &nbsp; & nbsp;</span>
          )}
        </td>
        <td>
            <Link to={`/colors/${index}`}>{color.name}</Link>
        </td>
        <td>
          {" "}
          <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </td>
      </tr>
    </>
  )
}

export default Color