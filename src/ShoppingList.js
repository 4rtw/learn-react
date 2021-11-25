import React from "react";
import "./ShoppingList.css";
import PlantItem from "./PlantItem";
import Plant from "./Model/Plant";
import Categories from "./Categories";

export default class ShoppingList extends React.Component {
  state = {
    plantList: [...Plant],
    plantListTemp: [...Plant],
  };

  onCategorieChange = categorieNr => {
    let plantList = [];

    if (categorieNr !== 0) {
      plantList = [...this.state.plantListTemp].filter(plant => {
        return plant.categorie.toString() === categorieNr.toString();
      });
    } else {
      plantList = [...this.state.plantListTemp];
    }

    this.setState({ plantList });
  };

  render() {
    return (
      <div className="ShoppingList">
        <div className="ShoppingList-categorie">
          <Categories onCategorieChange={this.onCategorieChange} />
        </div>
        {this.state.plantList.map(plant => {
          return <PlantItem key={plant.id} item={plant} />;
        })}
      </div>
    );
  }
}
