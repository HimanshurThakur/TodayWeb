import React from 'react'
import InputText from '../InputText/InputText'
import './InputTextwithPer.scss';

function InputTextwithPer() {
  return (
    <div>
       <div style={{display:"flex"}}>
      <InputText data="Please Enter Price "/>
      <span className='perUnit'>Per/Unit</span>
    </div>
    </div>
  )
}

export default InputTextwithPer
