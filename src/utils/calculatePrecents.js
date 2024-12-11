//Функция вычисления процентного соотношения частей в блоке
export default function calculatePercents(firstNum, secondNum, thirdNum) {
  const total = firstNum + secondNum + thirdNum;
  if (total === 0) {
    return { firstNumPercent: 0, secondNumPercent: 0, thirdNumPercent: 0 };
  }
  const firstNumPercent = Math.round((firstNum / total) * 100);
  const secondNumPercent = Math.round((secondNum / total) * 100);
  const thirdNumPercent = Math.round((thirdNum / total) * 100);
  return { firstNumPercent, secondNumPercent, thirdNumPercent };
}
