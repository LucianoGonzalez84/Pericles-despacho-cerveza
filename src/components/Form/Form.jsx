import React, { useState } from 'react';
import InputForm from '../InputForm/InputForm';
import Button from '../Button/Button';


function Form() {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
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
        setUserData({
            name: "",
            email: "",
            phone: "",
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <InputForm required="required" title="Nombre" name="name" value={userData.name} onInputChange={onInputChange}></InputForm>
            <InputForm required="required" title="Telefono" name="phone" value={userData.phone} onInputChange={onInputChange}></InputForm>
            <InputForm required="required" title="Email" name="email" value={userData.email} onInputChange={onInputChange}></InputForm>
            <Button onClick={onSubmit}>Finalizar Compra</Button>
        </form>
    )
}

export default Form