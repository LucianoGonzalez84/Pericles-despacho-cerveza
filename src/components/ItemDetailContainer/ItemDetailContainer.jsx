import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { getSingleProductFromDataBase } from '../../mockService/mockService';
import { useParams } from 'react-router-dom';




function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    
    let params = useParams();
    let id = params.id;

    useEffect(() => {
        getSingleProductFromDataBase(id).then((productsDataBase) => {
            setProduct(productsDataBase);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ItemDetail
          nombre={product.nombre}
          imagen={product.imagen}
          precio={product.precio}
          descripcion={product.descripcion}
        />
    )
}

export default ItemDetailContainer;