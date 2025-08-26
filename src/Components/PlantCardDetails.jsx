import { Link } from "react-router";
import { Card } from "react-bootstrap";

function PlantCardDetails({ id, commonName, scientificName, type, watering, sunlight, description }) {
  return (
    <Card className="plant-card-details">
      <h6>Common Name: {commonName}</h6>

      <h6>Scientific Name: {scientificName}</h6>

      <h6>Type: {type}</h6>

      <h6>Watering: {watering}</h6>

      <h6>Sunlight: {sunlight}</h6>

      <h6>Description: {description}</h6>
    </Card>
  );
}
export default PlantCardDetails;
