import Card from "./Card";

const CardContainer = ({ filteredList }) => {
  return (
    <div className="card-container">
      {filteredList?.map((restaurant) => {
        return (
          <Card
            resData={restaurant}
            key={restaurant?.info?.id}
            filteredList={filteredList}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
