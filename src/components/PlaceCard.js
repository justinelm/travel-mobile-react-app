import "../css/PlaceCard.css";
import Card from "../components/Card";
import StarIcon from "../components/StarIcon.js";
import SolidStarIcon from "../components/StarIcon.js";
import LocationMarkerIcon from "../components/LocationMarkerIcon.js";
export default function PlaceCard({
  bgColor,
  bgImage,
  className,
  title,
  location,
  avgRating,
  id
}) {
  const style = {
    backgroundColor: bgColor,
    backgroundImage: bgImage
  };
  const classNames = "place " + (className || "");
  return (
    <Card className={classNames}>
      <div className="image" style={style}>
        <div className="content">
          <div className="pill solid">
            <SolidStarIcon /> {avgRating}
          </div>
          <div className="pill">
            <StarIcon />
          </div>
        </div>
      </div>
      <div className="description">
        <h4 className="title">{title}</h4>
        <div className="location-content">
          <LocationMarkerIcon />
          <p className="map-location">{location}</p>
        </div>
      </div>
    </Card>
  );
}
