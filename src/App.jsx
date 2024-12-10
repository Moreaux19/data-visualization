import { useState, useEffect } from 'react';
import NormComponent from './components/NormComponent';
import DataComponent from './components/DataComponent';
import compareValues from './utils/compareValues';

//Чё нужно:
// Добавить функцию увеличения или уменьшения высоты второго и третьего блока в зависимости от разницы общей суммы числовых значений с предыдущим блоком

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
    </div>
  );
}

export default App;
