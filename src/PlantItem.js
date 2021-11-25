import "./PlantItem.css";

const PlantItem = ({ item }) => {
  return (
    <div className="PlantItem">
      <span className="PlantItem-price">{item.prix}€</span>
      <img
        src={item.image}
        alt={"Photo de" + item.nom}
        className="PlantItem-image"
      />
      {item.nom}{" "}
      <div className="PlantItem-specs">
        {[...Array(item.water).keys()].map(item => {
          return (
            <div key={item}>
              <img
                src="https://atoulmet.github.io/atoulmet-OC-React-Beginners/static/media/water.cceb486f.svg"
                alt="water icon"
              />
            </div>
          );
        })}
      </div>
      <div className="PlantItem-specs">
        {[...Array(item.sun).keys()].map(item => {
          return (
            <div key={item}>
              <img
                src="https://atoulmet.github.io/atoulmet-OC-React-Beginners/static/media/sun.26fb5ace.svg"
                alt="sun icon"
              />
            </div>
          );
        })}
      </div>
      <button className="PlantItem-add-button">Ajouter</button>
    </div>
  );
};

export default PlantItem;
