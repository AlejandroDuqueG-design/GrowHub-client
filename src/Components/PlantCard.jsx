import { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router";

function PlantCard({id, commonName, scientificName, type}) {

  const [commonNameValue, setCommonNameValue] = useState(commonName)
  const [scientificNameValue, setScientificNameValue] = useState(scientificName)
  const [typeValue, setTypeValue] = useState(type)

  return (
    <>

      <Card className="plant-card">
       
        <form className="plant-form">

        <label>
          <h6>Common Name:</h6>
          <input type="text" name="commonName" placeholder="Common Name" value={commonNameValue} onChange={((event)=>{setCommonNameValue(event.target.value)})}/>
        </label>

        <label>
        <h6>Scientific Name:</h6>
        <input type="text" name="scientificName" placeholder="Scientific Name" value={scientificNameValue} onChange={((event)=>{setScientificNameValue(event.target.value)})}/>
        </label>

        <label>
        <h6>Type: </h6>
        <select name="type" value={typeValue} onChange={((event)=>{setTypeValue(event.target.value)})}>
          <option value="Tree">Tree</option>
          <option value="Shrub">Shrub</option>
          <option value="Succulent">Succulent</option>
          <option value="Cactus">Cactus</option>
          <option value="Climber">Climber</option>
          <option value="Bush">Bush</option>
          <option value="Herbaceous Perennial">Herbaceous Perennial</option>
          <option value="Herbaceous Shrub">Herbaceous Shrub</option>
        </select>
        </label>
        

        <Link to={`/plant-details/${id}`}>
          <button>Plant Details</button>
        </Link>
        </form>
      </Card>
    </>
  );
}
export default PlantCard;
