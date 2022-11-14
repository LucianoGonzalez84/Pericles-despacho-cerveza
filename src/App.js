import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> }/>
          <Route path='/category/:styleid' element={ <ItemListContainer/> }/>
          <Route path='/detalle/:id' element={ <ItemDetailContainer/> }/>
          <Route path='*' element={ <h1>404: Ruta no encontrada</h1> }/>           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
