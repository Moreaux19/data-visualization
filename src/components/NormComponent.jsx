export default function NormComponent({ data }) {
  return (
    <div className="component">
      <div className="=component__norm-block">
        <div className="component__norm">{data}</div>
      </div>
      <p className="component__text">норматив</p>
    </div>
  );
}
