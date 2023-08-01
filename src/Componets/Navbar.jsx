import React from 'react'

const Navbar = ({name,work,Gendar}) => {
  return (
    <nav className="navbar bg-primary">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1 w-100 ">{name} {work} {Gendar}</span>
    </div>
  </nav>
  )
}

export default Navbar