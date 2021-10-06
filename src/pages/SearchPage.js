import "../css/SearchPage.css";
import { useState, useEffect } from "react";

import PlaceCard from "../components/PlaceCard.js";
import VerticalCardList from "../components/VerticalCardList.js";

import GearIcon from "../components/GearIcon.js";
import ViewGridIcon from "../components/ViewGridIcon.js";
import ViewBoardIcon from "../components/ViewBoardIcon.js";

/**
 * TODO:
 * [x] Fetch places
 * [x] Display places
 */
export default function SearchPage() {
  // places
  let [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("/api/places")
      .then((response) => response.json())
      .then((json) => {
        setPlaces(json.places);
      });
  }, []);
  return (
    <div className="main">
      <div className="block search">
        <div className="input-group">
          <input type="text" placeholder="Search" />
        </div>
        <div className="options">
          <GearIcon /> Filters
        </div>
      </div>
      <div className="block sort">
        <div>
          Sort by:{" "}
          <select>
            <option>Price</option>
            <option>Location</option>
          </select>
        </div>
        <div>
          <ViewGridIcon /> <ViewBoardIcon />
        </div>
      </div>
      <VerticalCardList title="Places" id="places">
        {places &&
          places.map((place, index) => {
            const key = `place-card-${index}`;
            return (
              <PlaceCard
                key={key}
                title={place.name}
                location={place.country}
                bgImage={`url('${place.img.url}')`}
                avgRating={place.avgRating}
              />
            );
          })}
      </VerticalCardList>
    </div>
  );
}
