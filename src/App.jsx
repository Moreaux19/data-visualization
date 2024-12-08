import { useState, useEffect } from 'react';
import NormComponent from './components/NormComponent';
import DataComponent from './components/DataComponent';

//Чё нужно:
// Определить минимум и максимум высоты каждого блока исходя из суммы их значений
// Функция для расчёта процентного соотношения трёх числовых аргументов, она должна возвращать массив данных с новым значением аргуеметов в виде процентов.
// Проброс этих новых значений в css файл
// В зависимости от разницы между суммарными значениями блоков, блоки должны отличаться по фиксированной высоте

const jsonData = 'https://rcslabs.ru/ttrp1.json';

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

  if (!data) {
    return <h2>Загрузка...</h2>;
  }

  return (
    <div className="page">
      <h4>Колличесвто пройденных тестов "{title}"</h4>
      <div className="components-container">
        <DataComponent data={dev} dataType={devType}></DataComponent>
        <DataComponent data={test} dataType={testType}></DataComponent>
        <DataComponent data={prod} dataType={prodType}></DataComponent>
        <NormComponent data={norm}></NormComponent>
      </div>
    </div>
  );
}

export default App;
