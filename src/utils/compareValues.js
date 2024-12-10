export default function compareValues(firstObject, secondObject) {
  const sumObjectValues = obj => Object.values(obj).reduce((sum, value) => sum + value, 0);
  const firstObjectSum = sumObjectValues(firstObject);
  const secondObjectSum = sumObjectValues(secondObject);
  const difference = firstObjectSum - secondObjectSum;
  if (difference > 0) {
    return { value: `+${difference}`, color: '#00CC99' };
  } else if (difference < 0) {
    return { value: `${difference}`, color: '#FC440F' };
  } else {
    return { value: '0', color: '#898290' };
  }
}
