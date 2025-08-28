import { Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router";
import { useState } from "react";
import EditPlantDetails from "./EditPlantDetails";

function PlantCardDetails({ id, commonName, scientificName, type, watering, sunlight, description }) {

  const [isEditCardShowing, setIsEditCardShowing] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/plants/${id}`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

    if (isEditCardShowing) {
    return (
      <EditPlantDetails
        initialData={{ id, commonName, scientificName, type, watering, sunlight, description }}
        onCancel={() => setIsEditCardShowing(false)}
        onSaved={() => setIsEditCardShowing(false)}
      />
    );
  }

  // Esto solo se renderiza si no estamos editando
  return (
    <div className="carddetails-container">
      <Card className="plant-card-details">
        <h6><strong>Common Name:</strong> {commonName}</h6>
        <h6><strong>Scientific Name:</strong> {scientificName}</h6>
        <h6><strong>Type:</strong> {type}</h6>
        <h6><strong>Watering:</strong> {watering}</h6>
        <h6><strong>Sunlight:</strong> {sunlight}</h6>
        <h6><strong>Description:</strong> {description}</h6>
        
        <Link to={`/treatments/${id}`}><button >See treatments</button></Link>
        
      </Card>
        <button type="button" onClick={() => setIsEditCardShowing(true)}>Edit</button>
        <button type="button" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default PlantCardDetails