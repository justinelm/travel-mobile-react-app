import "../css/TopNavigation.css";
import SolidUserCircle from "../components/SolidUserCircle.js";
import SearchIcon from "../components/SearchIcon.js";
import BellIcon from "../components/BellIcon.js";
export default function Header() {
  return (
    <div className="top-navigation">
      <div className="nav-group left">
        <SolidUserCircle />
      </div>
      <div className="nav-group right">
        <SearchIcon />
        <BellIcon />
      </div>
    </div>
  );
}
