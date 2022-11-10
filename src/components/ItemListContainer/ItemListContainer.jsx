import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import getProductsFromDataBase, { getProductsFromDataBaseByStyle } from '../../mockService/mockService';
import { useParams } from 'react-router-dom';



function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);
  const { styleid }  = useParams();
  

  useEffect(() => {
    if(styleid) {
      getProductsFromDataBaseByStyle(styleid).then((productsDataBase) => {
        setProductsList(productsDataBase);
      });
    } 
    else {
      getProductsFromDataBase().then((productsDataBase) => {
        setProductsList(productsDataBase);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [styleid]);

  return <ItemList productsList={productsList}/>;
    
}

export default ItemListContainer;


