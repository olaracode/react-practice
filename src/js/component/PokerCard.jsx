import React, { useState } from "react";
import "../../styles/poker-card.css";
/**
 * Cuando importas css el funciona
 * para el componente actual y sus hijos
 *
 */

const initialValue = {
  pinta: "♥",
  valor: "A",
  color: "text-danger",
};

const PokerCard = () => {
  const [carta, setCarta] = useState(initialValue);
  const pintas = ["♠", "♣", "♦", "♥"];
  const cartas = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  // Devuelve un elemento aleatorio de un array
  const getRandomFromArray = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const changeCarta = () => {
    const randomPinta = getRandomFromArray(pintas);
    const randomCarta = getRandomFromArray(cartas);
    let color =
      randomPinta === "♣" || randomPinta === "♠" ? "text-dark" : "text-danger";
    setCarta({
      pinta: randomPinta,
      valor: randomCarta,
      color: color,
    });
  };
  return (
    <div className="container bg-success rounded p-5 vh-100 fs-1">
      <div
        id="container"
        className={`card p-5 h-75 d-flex flex-column justify-content-between ${carta.color}`}
      >
        <div>
          <p>{carta.pinta}</p>
        </div>
        <div className="d-flex justify-content-center">
          <p>{carta.valor}</p>
        </div>
        <div className="d-flex justify-content-end">
          <p className="pintaInvertida">{carta.pinta}</p>
        </div>
      </div>
      <button className="mt-5" onClick={() => changeCarta()}>
        Cambia la carta
      </button>
    </div>
  );
};

export default PokerCard;
