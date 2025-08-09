// 1. Función declarativa - Consumo mensual (kWh)
function consumoMensual() {
  return parseFloat(prompt("Ingrese el consumo en kWh (ej: 410):")) || 410;
}
// 2. Función declarativa - Tarifa base por kWh
function tarifaBase() {
  return parseFloat(prompt("Ingrese la tarifa por kWh (ej: 620):")) || 620;
}
// 3. Función de expresión - Cargo fijo
const cargoFijo = function() {
  const cargoFijo = 3500;
  return cargoFijo;
};