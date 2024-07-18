import React, { useState } from 'react'

const Header = (prop) => {
  const [name, setName] = useState("pavi")
  return (
    <div>
      <div>Hello, {prop.prop} </div>
      <button onClick={() => setName("pavithran")}>click</button>
    </div>

  )
}

export default Header