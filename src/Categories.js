import React from "react";
import "./Categories.css";

export default class Categories extends React.Component {
  choices = [
    { choiceNr: 0, choiceName: "---" },
    { choiceNr: 1, choiceName: "classique" },
    { choiceNr: 2, choiceName: "extérieur" },
    { choiceNr: 3, choiceName: "plante grasse" },
  ];

  render() {
    return (
      <div className="Categorie">
        <select>
          {this.choices.map(choice => {
            return (
              <option
                key={choice.choiceNr}
                id={choice.choiceNr}
                label={choice.choiceName}
              />
            );
          })}
        </select>
        <button>Réinitialiser</button>
      </div>
    );
  }
}
