import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([])
  const [searchPlants, setSearch] = useState("")
  
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((resp) => resp.json())
    .then((data) => setPlantList(data))
  }, [])
  
  function handleNewPlant(newPlant) {
    setPlantList([...plantList, newPlant])
  }
  
  
  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant} />
      <Search searchPlants={searchPlants} setSearch={setSearch}/>
      <PlantList plantList={plantList} searchPlants={searchPlants} />
    </main>
  );
}

export default PlantPage;
