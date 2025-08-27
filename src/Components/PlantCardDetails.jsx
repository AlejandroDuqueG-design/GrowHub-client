import { Link } from "react-router";
import { Card } from "react-bootstrap";

function PlantCardDetails({ id, commonName, scientificName, type, watering, sunlight, description }) {
  return (
    <Card className="plant-card-details">
      <h6><strong>Common Name:</strong> {commonName}</h6>

      <h6><strong>Scientific Name:</strong> {scientificName}</h6>

      <h6><strong>Type:</strong> {type}</h6>

      <h6><strong>Watering:</strong> {watering}</h6>

      <h6><strong>Sunlight:</strong> {sunlight}</h6>

      <h6><strong>Description:</strong> {description}</h6>
    </Card>
  );
}
export default PlantCardDetails;
