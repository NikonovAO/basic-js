const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
 
    if (date == null) {
    return 'Unable to determine the time of year!';
  }
  let dateVerification = new Date(date); 
  if(date.getTime() !== dateVerification.getTime())
  {
    throw new Error();
  }

  let month = dateVerification.getMonth();

  if (month >= 2 &&  month <= 4) {
    return 'spring';
  }
  if (month >= 5 &&  month <= 7) {
    return 'summer';
  }
  if (month >= 8 &&  month <= 10) {
    return 'autumn';
  }

  return 'winter';
};