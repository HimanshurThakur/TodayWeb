import React from 'react'
import './InputText.scss';

const InputText = (props) => {
  return (
    <div className='inputText' style={{paddingLeft:"1.2rem"}}>
    <input type='text' style={{width:props.width, padding:"0.2rem", height:props.height}} placeholder={props.data}/>
    </div>
  ) 
}

export default InputText;
