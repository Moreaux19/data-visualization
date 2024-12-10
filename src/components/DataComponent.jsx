import calculatePercents from '/src/utils/calculatePrecents.js';

export default function DataComponent({ data, dataType, valueDifference, heightValue, children }) {
  const { front, back, db } = data;
  const percents = calculatePercents(front, back, db);

  const [frontPercent, backPercent, dbPercent] = Object.values(percents);

  return (
    <div className="component">
      {children}
      <div style={{ height: `${heightValue}rem` }} className="component__data-block">
        <div
          style={{ height: `${frontPercent}%` }}
          className="component__front component_flex-container"
        >
          <p className="component__number-value">{front}</p>
        </div>
        <div
          style={{ height: `${backPercent}%` }}
          className="component__back component_flex-container"
        >
          <p className="component__number-value">{back}</p>
        </div>
        <div style={{ height: `${dbPercent}%` }} className="component__db component_flex-container">
          <p className="component__number-value">{db}</p>
        </div>
      </div>
      <p className="component__text">{dataType}</p>
    </div>
  );
}
