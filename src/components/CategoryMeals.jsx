import React from "react";

function CategoryMeals({ category }) {
  let {
    categoryName: name,
    categoryDescription: description,
    items,
  } = category;
  if (name.startsWith("alc") || name.startsWith("alk")) {
    return <div>No content</div>;
  }
  return (
    <div className="category-info">
      <div className="name-description">
        <h2>{name}</h2>
        <h3>{description}</h3>
      </div>
      <div className="meals-container">
        <ul className="meals">
          {items.map((meal) => {
            console.log(meal.description.split("\r\n"));
            return (
              <li className="meal" key={meal.description}>
                {meal.description.split("\r\n").map((info) => {
                  return <p key={info}>{info}</p>;
                })}
                <p>{meal.price}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CategoryMeals;
