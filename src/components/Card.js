import "../css/Card.css";

export default function Card({ children, bgColor, className, bgImage }) {
  const style = {
    backgroundColor: bgColor,
    backgroundImage: bgImage
  };
  const classNames = "card " + (className || "");
  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
}
