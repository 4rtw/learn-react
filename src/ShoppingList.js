import React from "react";
import "./ShoppingList.css";
import PlantItem from "./PlantItem";
import Plant from "./Model/Plant";
import Categories from "./Categories";

export default class ShoppingList extends React.Component {
  state = {
    plantList: [...Plant],
  };
  render() {
    return (
      <div className="ShoppingList">
        <div className="ShoppingList-categorie">
          <Categories />
        </div>
        {this.state.plantList.map(plant => {
          return <PlantItem key={plant.id} item={plant} />;
        })}
      </div>
    );
  }
}
