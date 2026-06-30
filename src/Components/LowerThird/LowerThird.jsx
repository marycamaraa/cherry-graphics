import "./LowerThird.css";

function LowerThird({ name, title, visible }) {
  return (
    <div className={`lower-third ${visible ? "show" : ""}`}>
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
export default LowerThird;
