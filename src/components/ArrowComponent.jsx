import green from '../assets/green.svg';
import red from '../assets/red.svg';
import grey from '../assets/grey.svg';
import positive from '../assets/positive.svg';
import negative from '../assets/negative.svg';

export default function ArrowComponent({
  firstBlockHeight,
  secondBlockHeight,
  thirdBlockHeight,
  containerHeight,
  testDifference,
  prodDifference
}) {
  const containerHeightInRem = containerHeight / 10;

  const settingRectangle = value => {
    let pointer = null;
    if (value > 0) {
      pointer = <img src={positive} alt="plus" />;
      return (
        <div className="arrow__difference" style={{ backgroundImage: `url(${green})` }}>
          <p className="arrow__pointer">
            {pointer} +{value}
          </p>
        </div>
      );
    } else if (value < 0) {
      pointer = <img src={negative} alt="minus" />;
      return (
        <div className="arrow__difference" style={{ backgroundImage: `url(${red})` }}>
          <p className="arrow__pointer">
            {pointer} {value}
          </p>
        </div>
      );
    } else {
      return (
        <div className="arrow__difference" style={{ backgroundImage: `url(${grey})` }}>
          <p className="arrow__pointer">{value}</p>
        </div>
      );
    }
  };

  return (
    <div className="arrow-container">
      <div
        style={{
          '--before-height': `${containerHeightInRem - firstBlockHeight * 0.9}rem`, // умножение на 0.9 для большей точности к макету
          '--after-height': `${containerHeightInRem - secondBlockHeight * 0.9}rem`
        }}
        className="arrow"
      >
        <div>{settingRectangle(testDifference)}</div>
      </div>

      <div
        style={{
          '--before-height': `${containerHeightInRem - secondBlockHeight * 0.9}rem`,
          '--after-height': `${containerHeightInRem - thirdBlockHeight * 0.9}rem`
        }}
        className="arrow"
      >
        <div>{settingRectangle(prodDifference)}</div>
      </div>
    </div>
  );
}
