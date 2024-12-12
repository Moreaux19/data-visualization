// import positive from '../assets/positive.svg';
// import negative from '../assets/negative.svg';
const green = { backgroundImage: "url('./src/assets/green.svg')" };
const red = { backgroundImage: "url('./src/assets/red.svg')" };
const grey = { backgroundImage: "url('./src/assets/grey.svg')" };
const negative = <img src="./src/assets/negative.svg" alt="minus" />;
const postive = <img src="./src/assets/positive.svg" alt="plus" />;
console.log(grey);

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
      pointer = postive;
      return (
        <div className="arrow__difference" style={green}>
          <p className="arrow__pointer">
            {pointer} +{value}
          </p>
        </div>
      );
    } else if (value < 0) {
      pointer = negative;
      return (
        <div className="arrow__difference" style={red}>
          <p className="arrow__pointer">
            {pointer} {value}
          </p>
        </div>
      );
    } else {
      return (
        <div className="arrow__difference" style={grey}>
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
