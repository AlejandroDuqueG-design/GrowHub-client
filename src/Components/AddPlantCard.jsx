import axios from "axios";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router";

function AddPlantCard() {

  const navigate = useNavigate()

  const [commonName, setCommonName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [type, setType] = useState("");
  const [watering, setWatering] = useState("");
  const [sunlight, setSunlight] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newPlant = {
    commonName,
    scientificName,
    type,
    watering,
    sunlight,
    description
  }

  const response = axios.post(`${import.meta.env.VITE_SERVER_URL}/plants`, newPlant)
  .then(()=>{
    //console.log("Testing adding new plant")
    navigate("/plants")
  })
  .catch((error)=>{
    console.log(error)
  })

  }

  return (
    <>

      <Card className="plant-card">
        <form className="plant-form" onSubmit={handleSubmit}>
          <label>
            <h6>Common Name:</h6>
            <input type="text" name="commonName" placeholder="common name" value={commonName} onChange={((event)=>{setCommonName(event.target.value)})}/>
          </label>

          <label>
            <h6>Scientific Name:</h6>
            <input type="text" name="scientificName" placeholder="scientific name" value={scientificName} onChange={((event)=>{setScientificName(event.target.value)})}/>
          </label>

          <label>
            <h6>Type: </h6>
            <select name="type" value={type} onChange={((event)=>{setType(event.target.value)})}>
              <option value="">Select Type</option>
              <option value="Tree">Tree</option>
              <option value="Shrub">Shrub</option>
              <option value="Succulent">Succulent</option>
              <option value="Cactus">Cactus</option>
              <option value="Climber">Climber</option>
            </select>
          </label>

          <label>
            <h6>Watering:</h6>
            <input type="text" name="Watering" placeholder="watering" value={watering} onChange={((event)=>{setWatering(event.target.value)})}/>
          </label>

          <label>
            <h6>Sunlight:</h6>
            <input type="text" name="Sunlight" placeholder="sunlight" value={sunlight} onChange={((event)=>{setSunlight(event.target.value)})}/>
          </label>

          <label>
            <h6>Description:</h6>
            <input type="text" name="Description" placeholder="description" value={description} onChange={((event)=>{setDescription(event.target.value)})}/>
          </label>
          <button type="submit">Submit</button>
        </form>
      </Card>
    </>
  );
}
export default AddPlantCard;
