import "../css/HorizontalCardList.css";
import ChevronRightIcon from "../components/ChevronRightIcon.js";

export default function HorizontalCardList({ children, title, id, className }) {
  const classNames = "card-list horizontal " + className || "";
  return (
    <div id={id} className={classNames}>
      <div className="header">
        <h3 className="title">{title}</h3>
        <div className="more">
          <p className="label">See all</p>
          <ChevronRightIcon />
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
