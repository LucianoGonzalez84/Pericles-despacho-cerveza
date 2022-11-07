import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import getProductsFromDataBase from '../../mockService/mockService';



function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getProductsFromDataBase().then((productsDataBase) => {
      setProductsList(productsDataBase);
    });
  }, []);

  return <ItemList productsList={productsList}/>;
    
}

export default ItemListContainer;


