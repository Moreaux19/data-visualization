export default function NormComponent({ data, heightValue }) {
  return (
    <div className="component">
      <div>
        <div
          style={{ height: `${heightValue}rem` }}
          className="component__norm component_flex-container"
        >
          <p className="component__number-value component__number-value_norm ">{data}</p>
        </div>
      </div>
      <p className="component__text">норматив</p>
    </div>
  );
}
