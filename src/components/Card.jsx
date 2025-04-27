import { RES_LOGO } from "../utils/constants";

const Card = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  return (
    <div className="card">
      <img
        className="res-logo"
        src={RES_LOGO + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h5>{cuisines?.join(", ")}</h5>
      <p>{avgRating}⭐️</p>
    </div>
  );
};

export default Card;
