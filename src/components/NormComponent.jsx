export default function NormComponent({ data }) {
  return (
    <div className="component">
      <div className="=component__norm-block">
        <div className="component__norm component_flex-container">
          <p className="component__number-value component__number-value_norm">{data}</p>
        </div>
      </div>
      <p>норматив</p>
    </div>
  );
}
