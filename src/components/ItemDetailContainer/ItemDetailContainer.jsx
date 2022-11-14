import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { getSingleProductFromDataBase } from '../../mockService/mockService';
import { useParams } from 'react-router-dom';




function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    
    let id = useParams().id;

    useEffect(() => {
        getSingleProductFromDataBase(id).then((productsDataBase) => {
            setProduct(productsDataBase);
        })
        .catch((error) => {console.log(error);})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <ItemDetail product={product}/>;
    
}

export default ItemDetailContainer;