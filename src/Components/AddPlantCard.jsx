import axios from "axios";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router";

function AddPlantCard() {
  const navigate = useNavigate();

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
      description,
    };

    const response = axios
      .post(`${import.meta.env.VITE_SERVER_URL}/plants`, newPlant)
      .then(() => {
        navigate("/plants");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Card className="text-center align-self-center" style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title className="mb-5 mt-2">Add New Plant</Card.Title>
          <Form className="" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Common Name:</Form.Label>
              <Form.Control
                type="text"
                name="commonName"
                placeholder="common name"
                value={commonName}
                onChange={(event) => {
                  setCommonName(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Scientific Name:</Form.Label>
              <Form.Control
                type="text"
                name="scientificName"
                placeholder="scientific name"
                value={scientificName}
                onChange={(event) => {
                  setScientificName(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Type:</Form.Label>
              <Form.Select
                name="type"
                value={type}
                onChange={(event) => {
                  setType(event.target.value);
                }}
              >
                <option value="">Select Type</option>
                <option value="Tree">Tree</option>
                <option value="Shrub">Shrub</option>
                <option value="Succulent">Succulent</option>
                <option value="Cactus">Cactus</option>
                <option value="Climber">Climber</option>
                <option value="Herbaceous Perennial">Herbaceous Perennial</option>
                <option value="Herbaceous Shrub">Herbaceous Shrub</option>
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label>Watering:</Form.Label>
              <Form.Control
                type="text"
                name="Watering"
                placeholder="watering"
                value={watering}
                onChange={(event) => {
                  setWatering(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Sunlight:</Form.Label>
              <Form.Control
                type="text"
                name="Sunlight"
                placeholder="sunlight"
                value={sunlight}
                onChange={(event) => {
                  setSunlight(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description:</Form.Label>
              <Form.Control
                type="text"
                name="Description"
                placeholder="description"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </Form.Group>
            <Button className="mt-3" variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
export default AddPlantCard;
