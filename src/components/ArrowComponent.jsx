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
      pointer = <img src="./assets/positive.svg" alt="Plus" />;
      return (
        <div className="arrow__difference" style={{ backgroundImage: "url('./assets/green.svg')" }}>
          <p className="arrow__pointer">
            {pointer} +{value}
          </p>
        </div>
      );
    } else if (value < 0) {
      pointer = <img src="./assets/negative.svg" alt="Minus" />;
      return (
        <div className="arrow__difference" style={{ backgroundImage: "url('./assets/red.svg')" }}>
          <p className="arrow__pointer">
            {pointer} {value}
          </p>
        </div>
      );
    } else {
      return (
        <div className="arrow__difference" style={{ backgroundImage: "url('./assets/grey.svg')" }}>
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
