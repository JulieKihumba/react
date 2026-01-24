import React from 'react'

const Header = ({handleAddPopup}) => {
  return (
    <div>
      <h1>PHONEBOOK</h1>
      <button onClick={handleAddPopup}>add</button>
    </div>
  )
}

export default Header