import React, { useState } from "react";

/**
 * Estado: una variable que se
 * puede actualizar en el dom
 */

/**
 * hook
 * useState:
 * Declarar una variable y
 * una funcion que modifican
 * el estado
 */

// const [state -> "variable", setState -> "modificador"] = useState(initialState);

// Unicamente como valor por defecto
let countInitialState = 0;

// Aqui empieza componente
const Counter = () => {
  // [variable, setVariable] = useState();
  const [count, setCount] = useState(countInitialState);

  // Funciones flecha para modificar el estado
  const suma = () => {
    setCount(count + 1);
    // count = count + 1; // -> Error count is read-only
  };
  const resta = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={() => suma()}>Suma</button>
      Cuenta: {count}
      <button onClick={() => resta()}>Resta</button>
    </div>
  );
};

export default Counter;
