function adjustThermostat(cf, tc) {
  const d = (tc * 1.8 + 32 - cf);
  return d === 0
    ? "Hold"
    : `${d > 0 ? "Heat:" : "Cool:"} ${Math.abs(d).toFixed(1)} degrees Fahrenheit`;
}

const runTests = require('../../helpers/runTests');
runTests(adjustThermostat, `
    adjustThermostat(32, 0) should return "Hold".
    adjustThermostat(70, 25) should return "Heat: 7.0 degrees Fahrenheit".
    adjustThermostat(72, 18) should return "Cool: 7.6 degrees Fahrenheit".
    adjustThermostat(212, 100) should return "Hold".
    adjustThermostat(59, 22) should return "Heat: 12.6 degrees Fahrenheit".
`);