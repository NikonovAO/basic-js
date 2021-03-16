const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) { //turnsSpeed - число перемещаемых колец за час, или 3600 секунд
  let minMovies = Math.pow(2, disksNumber) - 1; //минимальное количество шагов = (2 в степени колич-ва колец)-1
  let speed = Math.floor((3600*minMovies)/turnsSpeed);  //округляем вниз, до целого
  return ({ turns: minMovies, seconds: speed });

};
