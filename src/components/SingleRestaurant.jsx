import React from "react";
import { useParams } from "react-router-dom";
import data from "../json/restaurants.json";
import CategoryMeals from "./CategoryMeals";

function SingleRestaurant() {
  let subdomain;
  const host = window.location.host,
    hostArr = host.split(".").slice(0, host.includes("restobau") ? -1 : -2);

  let restaurant;
  if (hostArr.length > 0 && hostArr[0] !== "www" && hostArr[0] !== "restobau") {
    subdomain = hostArr[0];
    console.log(subdomain);
    restaurant = data.restaurants[subdomain];
  } else {
    let { zipcode, i } = useParams();
    restaurant = data[zipcode][i];
  }
  return (
    <div className="single-restaurant-info">
      <div className="restaurant-header-container">
        <div className="restaurant-info">
          <p>{restaurant.name}</p>
          {restaurant.info.map((info) => {
            return (
              <p key={restaurant.name + "_" + restaurant.index + "_" + info}>
                {info}
              </p>
            );
          })}
        </div>
        <div className="restaurant-header-img">
          <img src={restaurant.logo} alt="" />
        </div>
      </div>
      <div className="restaurant-meals">
        <h1>Meals</h1>
        {Object.keys(restaurant.meals).map((category) => {
          return (
            <CategoryMeals
              category={restaurant.meals[category]}
              key={category + "_" + restaurant.index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SingleRestaurant;
