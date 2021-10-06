import "../css/VerticalCardList.css";

export default function VerticalCardList({ id, className, children }) {
  const classNames = "card-list vertical " + className || "";
  return (
    <div id={id} className={classNames}>
      <div className="content">{children}</div>
    </div>
  );
}
