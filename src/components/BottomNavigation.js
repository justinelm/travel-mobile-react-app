import { NavLink as Link } from "react-router-dom";
import "../css/BottomNavigation.css";
import ExploreIcon from "../components/ExploreIcon.js";
import SearchIcon from "../components/SearchIcon.js";
import StarIcon from "../components/StarIcon";
import MoreIcon from "../components/MoreIcon.js";

export default function BottomNavigation() {
  return (
    <div className="bottom-navigation ">
      <Link exact to="/" className="link " activeClassName="selected">
        <div>
          <ExploreIcon />
        </div>
        <div className="label">Explore</div>
      </Link>
      <Link to="/search" className="link " activeClassName="selected">
        <div>
          <SearchIcon />
        </div>
        <div className="label">Search</div>
      </Link>
      <Link to="/favorites" className="link " activeClassName="selected">
        <div>
          <StarIcon />
        </div>
        <div className="label">Favorites</div>
      </Link>
      <Link to="/more" className="link " activeClassName="selected">
        <div>
          <MoreIcon />
        </div>
        <div className="label">More</div>
      </Link>
    </div>
  );
}
