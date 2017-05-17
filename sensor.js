const sensor = require('ds18b20-raspi');
const tempC  = sensor.readSimpleC(2);

console.log(tempC);
