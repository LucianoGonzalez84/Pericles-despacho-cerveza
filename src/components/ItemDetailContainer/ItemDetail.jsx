import React from 'react';
import Button from '../Button/Button';
import Count from '../Count/Count';

// Estilos
import './itemdetail.css';

function ItemDetail(props) {
    return (
        <div className='detailcontainer'>
            <div className='detailcontainer__nombre'>
                <h2 >{props.nombre}</h2>
            </div>
            <div className='detailcontainer__info'>
                <div className='info__img' >
                    <img src={props.imagen} alt={props.imagen} />
                </div>
                <div className='info__info'>
                    <p className='info__precio'>$ {props.precio}</p> 
                    <div className='info__contador'>
                        <Count></Count>
                        <Button>Agregar</Button>
                    </div>                   
                    <p className='info__descripcion'>{props.descripcion}</p>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail