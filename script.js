// 1. Función declarativa - Consumo mensual (kWh)
function consumoMensual() {
  return parseFloat(prompt("Ingrese el consumo en kWh (ej: 410):")) || 410;
}

let retornoConsumo = consumoMensual()

console.log(retornoConsumo);
// 2. Función declarativa - Tarifa base por kWh
function tarifaBase() {
  return parseFloat(prompt("Ingrese la tarifa por kWh (ej: 620):")) || 620;
}
let retornoCargoFijo = tarifaBase()
// 3. Función de expresión - Cargo fijo
const cargoFijo = function() {
  const cargoFijo = 3500;
  return cargoFijo;
};
// 4. Función de expresión - IVA (%)
const ivaPorcentaje = function() {
  return 19; // IVA fijo del 19%
};
// 5. Función flecha - Subtotal
const calcularSubtotal = () => {
  return  retornoConsumo * retornoCargoFijo
}
// 6. Función flecha - Valor del IVA
const calcularIva = () => {
  return (calcularSubtotal() * ivaPorcentaje()) / 100;
}
// 7. Función flecha - Total a pagar
const calcularTotal = () => {
  return calcularSubtotal() + calcularIva() + cargoFijo();
}
// 8. Función final que muestra la factura, función declarativa.
function generarFactura() {
  const factura = `

  -------FACTURA DE ENERGÍA ELÉCTRICA-------

  ==> Consumo: ${retornoConsumo} kWh
  ==> Tarifa: $${retornoCargoFijo}/kWh
  ==> Subtotal: $${calcularSubtotal().toLocaleString()}
  ==> IVA (${ivaPorcentaje()}%): $${calcularIva().toLocaleString()}
  ==> Cargo fijo: $${cargoFijo().toLocaleString()}\n
  ------------------------------------------------
  ==> TOTAL: $${calcularTotal().toLocaleString()}
  `;
  
  console.log(factura);
  alert(factura); // Muestra también en un popup
}


generarFactura();