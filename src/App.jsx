import { useState } from "react"
import { Outlet, NavLink } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/home"}>Home</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
