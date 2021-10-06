import TopNavigation from "../components/TopNavigation.js";
import HorizontalCardList from "../components/HorizontalCardList";

import CollectionIcon from "../components/CollectionIcon.js";
import FlagIcon from "../components/FlagIcon.js";
import LibraryIcon from "../components/LibraryIcon.js";
import SunIcon from "../components/SunIcon.js";

import CategoryCard from "../components/CategoryCard.js";
import PlaceCard from "../components/PlaceCard.js";

import "../css/ExplorePage.css";

import { useState, useEffect } from "react";

// import { NavLink as Link } from "react-router-dom";

/**
 * TODO:
 * [X] Make Icons Dynamic
 * [x] Fetch categories data
 * [X] List out categories
 * [x] Fetch recommendedPlaces data
 * [x] List out recommendedPlaces
 * [x] Fetch popularPlaces data
 * [x] List out popularPlaces
 * [x] Add key field to lists
 * [] Add nested routing to detail page
 * [] Display details on card click
 */
export default function ExplorePage() {
  const categoryIcons = {
    collection: CollectionIcon,
    flag: FlagIcon,
    library: LibraryIcon,
    sun: SunIcon
  };

  // categories
  let [categories, setCategories] = useState([]);

  // recommendedPlaces
  let [recommendedPlaces, setRecommendedPlaces] = useState([]);

  // popularPlaces
  let [popularPlaces, setPopularPlaces] = useState([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((response) => response.json())
      .then((json) => {
        setCategories(json.categories);
      });
    fetch("/api/recommendedPlaces")
      .then((response) => response.json())
      .then((json) => {
        setRecommendedPlaces(json.recommendedPlaces);
      });
    fetch("/api/popularPlaces")
      .then((response) => response.json())
      .then((json) => {
        setPopularPlaces(json.popularPlaces);
      });
  }, []);

  return (
    <div>
      <TopNavigation />
      <div className="main">
        <div className="header">
          <h1 className="title">Explore</h1>
          <p className="description">We hope you find what you came for</p>
        </div>

        <HorizontalCardList title="Category" id="categories">
          {categories &&
            categories.map((category, index) => {
              const SpecificIcon = categoryIcons[category.icon];
              const key = `category-card-${index}`;
              return (
                // <Link to={"/categories/" + category.id} key={key}>
                <CategoryCard
                  key={key}
                  title={category.name}
                  icon={<SpecificIcon />}
                  bgImage={`linear-gradient(${category.gradients.top}, ${category.gradients.bottom})`}
                />
                /* </Link> */
              );
            })}
        </HorizontalCardList>
        <HorizontalCardList title="Recommendation" id="recommendations">
          {recommendedPlaces &&
            recommendedPlaces.map((place, index) => {
              const key = `recommended-card-${index}`;
              return (
                // <Link to={"/recommended/places/" + place.id} key={key}>
                <PlaceCard
                  key={key}
                  title={place.name}
                  location={place.country}
                  bgImage={`url('${place.img.url}')`}
                  avgRating={place.avgRating}
                />
                // </Link>
              );
            })}
        </HorizontalCardList>
        <HorizontalCardList title="Popular places" id="popular-places">
          {popularPlaces &&
            popularPlaces.map((place, index) => {
              const key = `popular-card-${index}`;
              return (
                // <Link to={"/popular/places/" + place.id} key={key}>
                <PlaceCard
                  key={key}
                  title={place.name}
                  location={place.country}
                  bgImage={`url('${place.img.url}')`}
                  avgRating={place.avgRating}
                />
                // </Link>
              );
            })}
        </HorizontalCardList>
      </div>
    </div>
  );
}
