import { Card } from "react-bootstrap";
import axios from "axios";

function PlantCardDetails({ id, commonName, scientificName, type, watering, sunlight, description }) {


  const handleDelete = async ()=> {
      try {
        console.log("Testing ",`${import.meta.env.VITE_SERVER_URL}/plants/${id}`)
        const response = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/plants/${id}`)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }


  return (
    <div className="carddetails-container">
    <Card className="plant-card-details">
      <h6><strong>Common Name:</strong> {commonName}</h6>

      <h6><strong>Scientific Name:</strong> {scientificName}</h6>

      <h6><strong>Type:</strong> {type}</h6>

      <h6><strong>Watering:</strong> {watering}</h6>

      <h6><strong>Sunlight:</strong> {sunlight}</h6>

      <h6><strong>Description:</strong> {description}</h6>
    </Card>

    <button>Edit</button>
    <button className="delete-plantcarddetails-btn" onClick={handleDelete}>Delete</button>
    </div>
  );
}
export default PlantCardDetails;
