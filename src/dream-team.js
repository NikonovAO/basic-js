const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let capitalLetters = '';
  let arr = [];
  let array = [];
  if((members === null) || (members === undefined))
  {
    return false;
  }
    for(let i=0; i<=members.length; i++)
    {
      if(typeof members[i] === 'string')   //проверка, является ли имя строкой
      {
        members[i] = members[i].replace(/ +/g, ' ').trim();      /*удаляем пустые символы*/
        arr.unshift(members[i]);           //добавляем в начало массива arr имя команды
        let array = arr.join(',');         //Преобразовываем знаки в массиве arr в массив array
        capitalLetters = capitalLetters + array[0];   //Прибавляем первый символ из массива array
        capitalLetters = capitalLetters.toUpperCase(); //переводим в верхний регистр
      }
    }
    let dreamTeamArr = capitalLetters.split('');      //собираем из строки массив
    dreamTeamArr.sort();                              //сортируем массив символов
    let dreamTeam = dreamTeamArr.join('');            //раскладываем отсортированный массив в строку
     return dreamTeam;
};
