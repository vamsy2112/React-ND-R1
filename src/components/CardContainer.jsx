import { Link } from "react-router-dom";

import Card from "./Card";

const CardContainer = ({ filteredList }) => {
  return (
    <div className="card-container">
      {filteredList?.map((restaurant) => {
        return (
          <Link
            to={"/restaurants/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            <Card resData={restaurant} filteredList={filteredList} />
          </Link>
        );
      })}
    </div>
  );
};

export default CardContainer;
