function adjustThermostat(cf, tc) {
  const d = (tc * 1.8 + 32 - cf);
  return d === 0
    ? "Hold"
    : `${d > 0 ? "Heat:" : "Cool:"} ${Math.abs(d).toFixed(1)} degrees Fahrenheit`;
}

const runTests = require('../../helpers/runTests');
runTests(adjustThermostat, [
    `assert.equal(adjustThermostat(32, 0), "Hold");`,
    `assert.equal(adjustThermostat(70, 25), "Heat: 7.0 degrees Fahrenheit");`,
    `assert.equal(adjustThermostat(72, 18), "Cool: 7.6 degrees Fahrenheit");`,
    `assert.equal(adjustThermostat(212, 100), "Hold");`,
    `assert.equal(adjustThermostat(59, 22), "Heat: 12.6 degrees Fahrenheit");`,
]);
