export default function ArrowComponent({
  firstBlockHeight,
  secondBlockHeight,
  thirdBlockHeight,
  containerHeight,
  testDifference,
  prodDifference
}) {
  const containerHeightInRem = containerHeight / 10;

  const isImageOne = 0;

  const greenRectangle = '../../../../public/green.svg';
  const redRectangle = '../../../../public/red.svg';

  const style = {
    backgroundImage: isImageOne
      ? "url('../../../../public/green.svg')"
      : "url('../../../../public/red.svg')"
  };

  const settingRectangle = value => {
    let pointer = null;
    if (value > 0) {
      pointer = <img src="/public/positive.svg" alt="Plus" />;
      return (
        <div
          className="arrow__difference"
          style={{ backgroundImage: "url('../../../../public/green.svg')" }}
        >
          <p className="arrow__pointer">
            {pointer} +{value}
          </p>
        </div>
      );
    } else if (value < 0) {
      pointer = <img src="/public/negative.svg" alt="Minus" />;
      return (
        <div
          className="arrow__difference"
          style={{ backgroundImage: "url('../../../../public/red.svg')" }}
        >
          <p className="arrow__pointer">
            {pointer} {value}
          </p>
        </div>
      );
    } else {
      return (
        <div
          className="arrow__difference"
          style={{ backgroundImage: "url('../../../../public/grey.svg')" }}
        >
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
