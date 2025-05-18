import { useState } from "react";

const months = [
  "Mayo", "Junio", "Julio", "Agosto",
  "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const actions = [
  "Comprar fuerte (inicio de acumulación)",
  "Comprar en tramos pequeños",
  "Última oportunidad de entrada razonable",
  "Mantener, no comprar más",
  "Evaluar toma de ganancias parcial",
  "Tomar ganancias (50%)",
  "Vigilar retrocesos. Vender más si sube",
  "Salir casi completo. Esperar corrección"
];

const prices = [
  74000, 78000, 82000, 86000,
  90000, 95000, 100000, 110000
];

export default function EstrategiaBTC2025() {
  const [index, setIndex] = useState(0);

  const nextMonth = () => setIndex((index + 1) % months.length);
  const prevMonth = () => setIndex((index - 1 + months.length) % months.length);

  return (
    <div style={{ textAlign: "center", padding: "1em" }}>
      <h1>Estrategia Bitcoin 2025</h1>
      <h2>{months[index]}</h2>
      <p>Precio estimado: ${prices[index]}</p>
      <p><strong>{actions[index]}</strong></p>
      <div style={{ marginTop: "1em" }}>
        <button onClick={prevMonth}>Mes anterior</button>
        <button onClick={nextMonth} style={{ marginLeft: "1em" }}>Mes siguiente</button>
      </div>
    </div>
  );
}
