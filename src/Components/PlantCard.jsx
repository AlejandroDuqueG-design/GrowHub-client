import { Link } from "react-router"

function PlantCard() {
  return (
    <>
    <div className="plant-card">

        <h5>Common Name:</h5><p>Monstera Deliciosa</p>
        <h5>Scientific Name:</h5><p>Monstera Deliciosa</p>
        <h5>Type: </h5><p>Climbing Plant</p>

        <Link to= "/plant-details/plantId">
        <button>Plant Details</button>
        
        </Link>
        
    </div>
    </>
  )
}
export default PlantCard