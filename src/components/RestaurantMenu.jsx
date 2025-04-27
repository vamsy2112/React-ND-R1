import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const result = await data.json();
    console.log(result);
    setresInfo(result?.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, avgRating } = resInfo?.cards[2]?.card?.card?.info;
  const itemCardsList = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  const { itemCards } = itemCardsList?.cards[1]?.card?.card;

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating}⭐️</h4>

      {itemCards?.map((item) => (
        <li key={item?.card?.info?.id}>
          {item?.card?.info?.name} - Rs.{" "}
          {item?.card?.info?.price / 100 ||
            item?.card?.info?.defaultPrice / 100}
        </li>
      ))}
    </div>
  );
};

export default RestaurantMenu;
