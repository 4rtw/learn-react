import React from "react";
import "./Categories.css";

export default class Categories extends React.Component {
  state = {
    choices: [
      { choiceNr: 0, choiceName: "---" },
      { choiceNr: 1, choiceName: "classique" },
      { choiceNr: 2, choiceName: "extérieur" },
      { choiceNr: 3, choiceName: "plante grasse" },
    ],
    defaultChoice: 0,
  };

  change = event => {
    const value = event.target.value;
    const choices = [...this.state.choices];
    const choice = choices.find(choice => {
      return choice.choiceNr.toString() === value.toString();
    });

    this.setState({
      defaultChoice: choice.choiceNr,
    });

    this.props.onCategorieChange(choice.choiceNr);
  };

  render() {
    return (
      <div className="Categorie">
        <select onChange={this.change} value={this.state.defaultChoice}>
          {this.state.choices.map(choice => {
            return (
              <option
                key={choice.choiceNr}
                label={choice.choiceName}
                value={choice.choiceNr}
              />
            );
          })}
        </select>
        <button>Réinitialiser</button>
      </div>
    );
  }
}
