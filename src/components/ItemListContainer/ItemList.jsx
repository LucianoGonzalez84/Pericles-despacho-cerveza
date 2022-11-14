import React from 'react';
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import Item from '../Item/Item';

// Estilos
import './itemlist.css'

function ItemList(props) {
    
    let titulo="";
    if (props.style===undefined) {
        titulo = "Todas nuestras cervezas";
    } else {
        titulo = props.style
    }
    
    return (
        <div className='containeritemlist'>
            <div className='title'>
                <h1>{titulo}</h1>    
            </div>            
            <FlexWrapper>
                {props.productsList.map((product) => (
                    <Item
                        Key={product.id}
                        imagen={product.imagen}
                        nombre={product.nombre}
                        estilo={product.estilo}
                        tamaño={product.tamaño}
                        alcohol={product.alcohol}
                        ibu={product.ibu}
                        precio={product.precio}
                        descripcion={product.descripcion}
                    />
                ))}
            </FlexWrapper>
        </div>
    )
}

export default ItemList;


