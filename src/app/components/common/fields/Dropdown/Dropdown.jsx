import React from 'react'
import './Dropdown.scss';

function Dropdown(props) {
  return (
    <div style={{ padding: "1.5rem 1.2rem" }}>
      <label for="product"><span>{props.name}: </span></label>
      <select name="product" className='select' id="product">
        {
          props.data.map((items) => (
            <option value={items.options}>{items.options}</option>
          ))
        }


      </select>
    </div>
  )
}

export default Dropdown
