import CardContainer from "./CardContainer";
import { useState, useEffect } from "react";

import Shimmer from "./Shimmer";

const Body = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [filteredListCopy, setFilteredListCopy] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("body rendered");

  useEffect(() => {
    fetchData();
    console.log("useEffect rendered");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const result = await data.json();
    setFilteredList(
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredListCopy(
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const topResClick = () => {
    const finalresList = filteredList?.filter((res) => {
      return res?.info?.avgRating >= 4.6;
    });

    setFilteredList(finalresList);
  };

  return filteredList?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <input
          className="searchInput"
          type="search"
          placeholder="search your favourite restaurant, dessert, juice, dish.."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {console.log(searchText)}
        <button
          className="search-btn"
          onClick={() => {
            const searchedResList = filteredList?.filter((res) => {
              return res?.info?.name?.toLowerCase()?.includes(searchText);
            });
            console.log(searchedResList);
            setFilteredListCopy(searchedResList);
          }}
        >
          Search
        </button>
        <button className="filter-btn" onClick={topResClick}>
          Top rated restaurants
        </button>
      </div>
      <div>
        <CardContainer
          topResClick={topResClick}
          filteredList={filteredListCopy}
        />
      </div>
    </>
  );
};

export default Body;
