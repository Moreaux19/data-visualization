//Функция сравнения разницы блоков в общей сумме и возврат результат
export default function compareValues(firstObject, secondObject) {
  const sumObjectValues = obj => Object.values(obj).reduce((sum, value) => sum + value, 0);
  const firstObjectSum = sumObjectValues(firstObject);
  const secondObjectSum = sumObjectValues(secondObject);
  const difference = secondObjectSum - firstObjectSum;
  if (difference > 0) {
    return difference;
  } else if (difference < 0) {
    return difference;
  } else {
    return 0;
  }
}
