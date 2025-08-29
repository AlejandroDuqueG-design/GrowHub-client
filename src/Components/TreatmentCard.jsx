import axios from "axios";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router";

function TreatmentCard({ id, plantId, treatmentDescription, timeOfYear }) {
  //const [plantIdValue, setPlantIdValue] = useState(plantId);
  const [treatmentDescriptionValue, setTreatmentDescriptionValue] = useState(treatmentDescription);
  const [timeOfYearValue, setTimeOfYearValue] = useState(timeOfYear);

  const handleDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/treatments/${id}`);
      console.log("Treatment deleted", id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="text-center align-self-center" >
      <Card.Body>
        <Form className="">
          <Form.Group>
            <Form.Label>Treatment Description:</Form.Label>
            <Form.Control
              type="text"
              name="treatmentDescription"
              placeholder="Treatment Description"
              value={treatmentDescriptionValue}
              onChange={(event) => {
                setTreatmentDescriptionValue(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Time of year:</Form.Label>
            <Form.Control
              type="text"
              name="timeOfYear"
              placeholder="Time of Year"
              value={timeOfYearValue}
              onChange={(event) => {
                setTimeOfYearValue(event.target.value);
              }}
            />
          </Form.Group>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Button variant="outline-secondary" onClick={handleDelete}>
          Delete treatment
        </Button>
      </Card.Footer>
    </Card>
  );
}
export default TreatmentCard;
