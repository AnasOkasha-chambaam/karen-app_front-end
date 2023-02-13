import React from "react";
import { useParams } from "react-router-dom";
import data from "../json/restaurants.json";
// import { Link } from "reactrrr-router-dom";
import codeBackground from "../imgs/zip-code-background.webp";

function ZipCode() {
  let { zipcode } = useParams();
  return (
    <section className="zip-code-info-container">
      <div className="zip-code-info">
        <div className="code-container">
          <h1
            style={{
              background: `url(${codeBackground}) repeat center center`,
            }}
          >
            {zipcode}
          </h1>
        </div>
        <ul className="zip-code-restaurants">
          {data.zipcodes[zipcode].map((restaurant) => {
            return (
              <a
                href={`https://${restaurant.name
                  .replace(/[^a-zA-Z ]/g, "")
                  .split(" ")
                  .join("")}.restobau.at`}
                key={restaurant.index + "_" + restaurant.i}
              >
                <li className="restaurant-card">
                  <div className="restaurant-logo">
                    <img
                      src={restaurant.logo}
                      alt={restaurant.name + " Logo"}
                      height={120}
                    />
                  </div>
                  <div className="restaurant-info">
                    <p>{restaurant.name}</p>
                    {restaurant.info.map((info) => {
                      return (
                        <p
                          key={
                            restaurant.index +
                            "_" +
                            restaurant.name +
                            "_" +
                            info
                          }
                        >
                          {info}
                        </p>
                      );
                    })}
                  </div>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default ZipCode;
