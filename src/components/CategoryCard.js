import Card from "../components/Card.js";
import "../css/CategoryCard.css";
export default function CategoryCard({
  icon,
  title,
  bgImage,
  bgColor,
  className
}) {
  const classNames = className || "";
  return (
    <Card className={classNames} bgImage={bgImage} bgColor={bgColor}>
      {icon}
      <p className="title">{title}</p>
    </Card>
  );
}
