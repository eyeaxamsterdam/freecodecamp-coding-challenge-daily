function adjustThermostat(cf, tc) {
  const d = (tc * 1.8 + 32 - cf);
  return d === 0
    ? "Hold"
    : `${d > 0 ? "Heat:" : "Cool:"} ${Math.abs(d).toFixed(1)} degrees Fahrenheit`;
}