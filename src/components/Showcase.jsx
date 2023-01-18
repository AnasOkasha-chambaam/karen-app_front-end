import React from "react";
import data from "../json/restaurants.json";
import { Link } from "react-router-dom";
const zipCodes = Object.keys(data.zipcodes);
function Showcase() {
  return (
    <section className="zip-codes-container">
      <ul className="zip-codes">
        {zipCodes.map((code) => {
          return (
            <Link to={"/restaurants/" + code} key={code}>
              <li className="zip">{code}</li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
}

export default Showcase;
