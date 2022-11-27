import React from 'react';
import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Estilos
import './loading.css';

function Loading() {
  return (
    <div className='spinner_container'>
        <Spinner className='spinner' color='secundary'/>
    </div>    
  )
}

export default Loading