import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";

function Mostrar() {
  const array = [1, 2, 3, 5, 6];
  return (
    <div>
      {array.map((number) => (
        <>
          <span>Mi Elemento es: {number}</span>
        </>
      ))}
    </div>
  );
}

export default function Array() {}
