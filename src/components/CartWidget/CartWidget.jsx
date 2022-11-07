import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBeer} from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
  return (
    <div className='cartwidget'>
        <FontAwesomeIcon icon= {faBeer}/>
        <p>(0)</p>
    </div>
    

  )
}

export default CartWidget;
