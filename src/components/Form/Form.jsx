import React, { useState } from 'react';
import InputForm from '../InputForm/InputForm';
import Button from '../Button/Button';


function Form(props) {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
    })

    console.log(userData)

    function onInputChange(evt) {
        const inputName = evt.target.name;
        const value = evt.target.value;
        
        const newUserData = {...userData};
        newUserData[inputName] = value;
        setUserData(newUserData);
    } 

    function onSubmit(evt) {
        evt.preventDefault();
        props.onSubmit(userData);
    }

    return (
        <form onSubmit={onSubmit}>
            <InputForm 
                required="true" 
                title="Nombre" 
                name="name" 
                value={userData.name} 
                onInputChange={onInputChange}>
            </InputForm>
            <InputForm 
                required="true" 
                title="Telefono" 
                name="phone" 
                value={userData.phone} 
                onInputChange={onInputChange}>
            </InputForm>
            <InputForm 
                required="true" 
                title="Email" 
                name="email" 
                value={userData.email} 
                onInputChange={onInputChange}>
            </InputForm>
            <InputForm 
                required="true" 
                title="Direccion" 
                name="address" 
                value={userData.address} 
                onInputChange={onInputChange}>
            </InputForm>
            <InputForm 
                required="true" 
                title="Ciudad" 
                name="city" 
                value={userData.city} 
                onInputChange={onInputChange}>
            </InputForm>
            <Button onClick={onSubmit}>Finalizar Compra</Button>
        </form>
    )
}

export default Form