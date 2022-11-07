import React, { useState } from "react";

function Count() {
  const [cantidad, setCantidad] = useState(0);

  function decremento() {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  }

  function incremento() {
    setCantidad(cantidad + 1);
  }

  return (
    <div className="contador">        
      <button className="contador__btn" onClick={decremento}>-</button>
      <div className="contador__cantidad">{cantidad}</div>
      <button className="contador__btn" onClick={incremento}>+</button>
    </div>
  );
}

export default Count;
