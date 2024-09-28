import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { foodList } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h3>Top Dishes Near You </h3>
      <div className="food-display-list">
        {foodList.map((item, index) => {
          if (category === "All" || category === item?.category) {
            return (
              <div>
                <FoodItem
                  key={index}
                  id={item?._id}
                  name={item?.name}
                  image={item?.image}
                  price={item?.price}
                  description={item?.description}
                  category={item?.category}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
