import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {plantList, searchPlants}) {
  
  const filteredPlants = plantList.filter((plant) => {
    const lowerCasePlant = plant.name.toLowerCase()
    const lowerSearch = searchPlants.toLowerCase()
    return lowerCasePlant.includes(lowerSearch)
  })
  
  
  return (
    <ul className="cards">{filteredPlants.map((plant) => {
      return <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price} />
    })}</ul>
  );
}

export default PlantList;
