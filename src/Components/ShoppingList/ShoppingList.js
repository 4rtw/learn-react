import React from "react";
import "./ShoppingList.css";
import PlantItem from "./../PlantItem/PlantItem";
import Plant from "../../Model/Plant";
import Categories from "./../Categorie/Categories";

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
          return (
            <div key={plant.id} className="ShoppingList-plant">
              <PlantItem item={plant} />
            </div>
          );
        })}
      </div>
    );
  }
}
