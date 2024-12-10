import { useState, useEffect } from 'react';
import NormComponent from './components/NormComponent';
import DataComponent from './components/DataComponent';
import calculateHeight from './utils/calculateHeight';
import compareValues from './utils/compareValues';
import ArrowComponent from './components/ArrowComponent';

//Чё нужно:
// Добавить функцию увеличения или уменьшения высоты второго и третьего блока в зависимости от разницы общей суммы числовых значений с предыдущим блоком

const jsonData = 'https://rcslabs.ru/ttrp1.json';

const defaultMaxHeight = 26.5;

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(jsonData)
      .then(response => response.json())
      .then(responseData => {
        setData(responseData);
      });
  }, []);
  const { title, dev = {}, test = {}, prod = {}, norm } = data;
  const [, devType, testType, prodType] = Object.keys(data);

  const normHeight = calculateHeight(dev, test, prod, defaultMaxHeight, norm);

  const testDifference = compareValues(dev, test);
  const testDifferenceRem = calculateHeight(
    dev,
    test,
    prod,
    defaultMaxHeight,
    testDifference.value
  );
  const testHeight = defaultMaxHeight + testDifferenceRem;

  const prodDifference = compareValues(test, prod);
  const prodDifferenceRem = calculateHeight(
    dev,
    test,
    prod,
    defaultMaxHeight,
    prodDifference.value
  );
  const prodHeight = testHeight + prodDifferenceRem;

  console.log(prodHeight);
  return (
    <>
      <h1>Количество пройденных тестов "{title}"</h1>
      <ArrowComponent></ArrowComponent>
      <div className="components-container">
        <DataComponent data={dev} dataType={devType}></DataComponent>
        <DataComponent data={test} dataType={testType} heightValue={testHeight}></DataComponent>
        <DataComponent data={prod} dataType={prodType} heightValue={prodHeight}></DataComponent>
        <NormComponent data={norm} heightValue={normHeight}></NormComponent>
      </div>
      <div className="annotation-container">
        <div style={{ '--mark-color': '#4ab6e8' }} className="annotation-mark">
          Клиентская часть
        </div>
        <div style={{ '--mark-color': '#aa6fac' }} className="annotation-mark">
          Серверная часть
        </div>
        <div style={{ '--mark-color': '#e85498' }} className="annotation-mark">
          База данных
        </div>
      </div>
    </>
  );
}

export default App;
