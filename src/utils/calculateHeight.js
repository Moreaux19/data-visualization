export default function calculateHeight(
  firstObject,
  secondObject,
  thirdObject,
  defaultMaxHeight,
  numValue
) {
  const firstTotal = Object.values(firstObject).reduce((acc, value) => acc + value, 0);
  const secondTotal = Object.values(secondObject).reduce((acc, value) => acc + value, 0);
  const thirdTotal = Object.values(thirdObject).reduce((acc, value) => acc + value, 0);
  const biggestTotal = Math.max(firstTotal, secondTotal, thirdTotal);
  const height = (numValue / biggestTotal) * defaultMaxHeight;
  const roundedHeight = Math.round(height * 10) / 10;
  return roundedHeight;
}
