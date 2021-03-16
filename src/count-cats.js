const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  let i;
  let arr = matrix.join(',');
  let array = arr.split(',')
  for (i=0; i<=array.length; i++)
  {
    if (array[i]==='^^')
    {
      count = count +1;
    }
  }
  return count
};
