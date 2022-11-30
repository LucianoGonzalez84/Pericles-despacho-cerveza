import React from 'react'

function InputForm(props) {
  return (
    <>
      <label>{props.title}</label>
      <input 
        required={true} 
        value={props.value} 
        name={props.name} 
        type="text" 
        onChange={props.onInputChange}/>
    </>
  );
};

export default InputForm