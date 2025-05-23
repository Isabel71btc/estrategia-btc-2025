export default function EstrategiaBTC2025() {
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

  return (
    <div>
      <h1>Estrategia Bitcoin 2025</h1>
      <h2>Meses</h2>
      <ul>{months.map(m => <li key={m}>{m}</li>)}</ul>
      <h2>Acciones</h2>
      <ul>{actions.map(a => <li key={a}>{a}</li>)}</ul>
    </div>
  );
}
