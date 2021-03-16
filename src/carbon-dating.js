const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if((typeof sampleActivity !== 'string'))  //проверяем, передана ли нам строка, если нет - false
  {
    return false;
  }

  sampleActivity = Number(sampleActivity); // приводим строку к числу
  if((typeof sampleActivity !== 'number') || (sampleActivity <= 0) || (sampleActivity > 15) || (isNaN(sampleActivity))) //если 0 >= sampleActivity < 15, NAN, не число, тогда false
  {
    return false;
  }
  let k = 0.693/HALF_LIFE_PERIOD; //коэффициент
  let t = Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity))/k); //время
  return t;
};
