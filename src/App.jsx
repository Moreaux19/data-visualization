import { useState, useEffect, useRef } from 'react';
import NormComponent from './components/NormComponent';
import DataComponent from './components/DataComponent';
import calculateHeight from './utils/calculateHeight';
import compareValues from './utils/compareValues';
import ArrowComponent from './components/ArrowComponent';

const defaultMaxHeight = 26.5;

function App() {
  //Хук для json'а
  const [data, setData] = useState([]);
  //Хук для динамического переключени api
  const [api, setApi] = useState('1');
  //Хуки для контейнера высоты
  const [containerHeight, setContainerHeight] = useState(0);
  const elementRef = useRef(null);

  //Загрузка и переключение api
  useEffect(() => {
    fetch(`https://rcslabs.ru/ttrp${api}.json`)
      .then(response => response.json())
      .then(responseData => {
        setData(responseData);
      });
  }, [api]);

  //Динамическое извлечение высоты
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    const updateHeight = () => {
      setContainerHeight(element.offsetHeight);
    };
    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, []);

  //Деструктурированые объекты данных из базы
  const { title, dev = {}, test = {}, prod = {}, norm } = data;
  //Типы данных
  const [, devType, testType, prodType] = Object.keys(data);

  //Разница значения графика test по отношению к dev и цвет блока с разницей
  const testDifference = compareValues(dev, test);
  //Разница графика test перерасчитанная в Rem
  const testDifferenceRem = calculateHeight(dev, test, prod, defaultMaxHeight, testDifference);

  //Разница графика prod по отношению к test
  const prodDifference = compareValues(test, prod);
  //Разница графика prod перерасчитанная в Rem
  const prodDifferenceRem = calculateHeight(dev, test, prod, defaultMaxHeight, prodDifference);

  //Высота блока test
  const testHeight = defaultMaxHeight + testDifferenceRem;
  //Высота блока prod
  const prodHeight = testHeight + prodDifferenceRem;
  //Высота блока нормы
  const normHeight = calculateHeight(dev, test, prod, defaultMaxHeight, norm);

  return (
    <>
      <h1 style={{ fontSize: '16px' }}>Количество пройденных тестов "{title}"</h1>
      <div>
        <select value={api} onChange={e => setApi(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div style={{ marginLeft: '6rem' }}>
        <ArrowComponent
          firstBlockHeight={defaultMaxHeight}
          secondBlockHeight={testHeight}
          thirdBlockHeight={prodHeight}
          containerHeight={containerHeight}
          testDifference={testDifference}
          prodDifference={prodDifference}
        ></ArrowComponent>
        <div ref={elementRef} className="components-container">
          <DataComponent data={dev} dataType={devType}></DataComponent>
          <DataComponent data={test} dataType={testType} heightValue={testHeight}></DataComponent>
          <DataComponent data={prod} dataType={prodType} heightValue={prodHeight}></DataComponent>
          <NormComponent data={norm} heightValue={normHeight}></NormComponent>
        </div>
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
