import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";

function MiComponente({ number, text }) {
  const [textColor, setTextcolor] = useState("blue");
  const [hayUnError, setHayUnError] = useState(false);

  return (
    <>
      {hayUnError && <span>Error!</span>}
      {!hayUnError && <span>No hay errores!</span>}
      <br />
      <br />
      <span>{number}</span>;
      <br />
      <span style={{ color: textColor }}>{text}</span>;
      <button onClick={() => setTextcolor("red")}>Cambiar color</button>
      <br />
      <br />
      <span>Hola</span>
    </>
  );
}

function App() {
  return (
    <div>
      <MiComponente number="6" text="Mi texto" />
    </div>
  );
}

render(<App />, document.getElementById("root"));
