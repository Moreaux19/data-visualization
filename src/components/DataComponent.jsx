import calculatePercents from '/src/utils/calculatePrecents.js';

export default function DataComponent({ data, dataType }) {
  const { front, back, db } = data;
  const percents = calculatePercents(front, back, db);

  const [frontPercent, backPercent, dbPercent] = Object.values(percents);

  return (
    <div className="component">
      <div className="component__data-block">
        <div style={{ height: `${frontPercent}%` }} className="component__front">
          {front}
        </div>
        <div style={{ height: `${backPercent}%` }} className="component__back">
          {back}
        </div>
        <div style={{ height: `${dbPercent}%` }} className="component__db">
          {db}
        </div>
      </div>
      <p className="component__text">{dataType}</p>
    </div>
  );
}
