import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <>
    <nav>
      <h1>
        <Link to="/colors">Colors</Link>
      </h1>
      <button>
        <Link to="/colors/new">New Color</Link>
      </button>
    </nav>
    </>
  )
}

export default NavBar