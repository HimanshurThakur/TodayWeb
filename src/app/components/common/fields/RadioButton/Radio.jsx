import './Radio.scss';
import React from 'react'

const RadioField = (props) => {
    const handleRadioChange = () => {
        props.onChange(props.data.id);
      };

    return (

        <div className='radioButtons'>
            <label style={{ cursor: "pointer", padding: "10px", marginBottom:"10px" }}>
                <input className="" type="radio" name={props.data.name}  value={props.data.value} id={props.data.id} checked={props.checked}
          onChange={handleRadioChange} />
                <span className="" for={props.data.for} style={{ fontSize: "larger" }}>
                {props.data.label}
                </span>
            </label>
        </div>
        
    )
}

export default RadioField;
