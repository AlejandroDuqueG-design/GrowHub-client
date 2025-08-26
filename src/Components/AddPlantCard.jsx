import { Card } from "react-bootstrap"
import { Link } from "react-router"

function AddPlantCard() {
  return (
    <>
     <Card className="plant-card">
        <form className="plant-form">

        <label>
          <h6>Common Name:</h6>
          <input type="text" name="commonName" placeholder= "common name" />
        </label>

        <label>
        <h6>Scientific Name:</h6>
        <input type="text" name="scientificName" placeholder= "scientific name" />
        </label>

        <label>
        <h6>Type: </h6>
        <select name="type">
          <option value="tree">Tree</option>
          <option value="shrub">Shrub</option>
          <option value="succulent">Succulent</option>
          <option value="cactus">Cactus</option>
          <option value="climber">Climber</option>
        </select>
        </label>
        

        <Link to="/plant-details/plantId">
          <button>Plant Details</button>
        </Link>
        </form>
      </Card>
      
      


    </>
    
  )
}
export default AddPlantCard