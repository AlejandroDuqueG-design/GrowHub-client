import { Button, Card, Form } from "react-bootstrap";

function EditPlantDetails({ onCancel }) {
  return (
    <Card className="text-center">
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Common Name:</Form.Label>
            <Form.Control type="text" name="commonName" placeholder="common name" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Scientific Name:</Form.Label>
            <Form.Control type="text" name="scientificName" placeholder="scientific name" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Type:</Form.Label>
            <Form.Select name="type">
              <option value="">Select Type</option>
              <option value="Tree">Tree</option>
              <option value="Shrub">Shrub</option>
              <option value="Succulent">Succulent</option>
              <option value="Cactus">Cactus</option>
              <option value="Climber">Climber</option>
              <option value="Bush">Bush</option>
              <option value="Herbaceous Perennial">Herbaceous Perennial</option>
              <option value="Herbaceous Shrub">Herbaceous Shrub</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label>Watering:</Form.Label>
            <Form.Control type="text" name="Watering" placeholder="watering" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Sunlight:</Form.Label>
            <Form.Control type="text" name="Sunlight" placeholder="sunlight" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control type="text" name="Description" placeholder="description" />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center gap-5 my-4">
            <Button variant="success" type="submit">
              Save
            </Button>
            <Button variant="secondary" type="button" onClick={onCancel}>
              Cancel
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
export default EditPlantDetails;
