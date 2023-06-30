import React from 'react'

function CheckBox(props) {
  return (
    <div style={{ display: "flex", padding: "1rem" }}>
      <input type="checkbox" id="checkbox" />
      <label for="checkbox">{props.data}</label>
    </div>
  )
}

export default CheckBox
