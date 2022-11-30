import React from 'react'

function InputForm(props) {
  return (
    <div>
        <label htmlFor="">{props.title}</label>
        <input required={props.required} value={props.value} name={props.name} type={props.type} onChange={props.onInputChange}/>
    </div>
  )
}

export default InputForm