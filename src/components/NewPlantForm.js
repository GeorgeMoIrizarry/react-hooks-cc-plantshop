import React, {useState} from "react";

function NewPlantForm( {handleNewPlant} ) {
  const [plantName, setName] = useState("")
  const [plantImage, setImage] = useState("")
  const [plantPrice, setPrice] = useState("")
  
  
  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
      body : JSON.stringify({
        "name" : plantName,
        "image" : plantImage,
        "price" : plantPrice
      }),
      headers : {
        "Content-Type": "Application/JSON",
      },
      method : 'POST'
    })
    .then((resp) => resp.json())
    .then((newPlant) => handleNewPlant(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={plantName} 
        onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" image={plantImage} 
        onChange={(e) => setImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={plantPrice} 
        onChange={(e) => setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
