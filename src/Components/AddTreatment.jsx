import axios from "axios";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router";

function AddTreatment() {
  const navigate = useNavigate();

  //   const [id, setid] = useState("");
  //   const [plantId, setPlantId] = useState("");
  const [treatmentDescription, setTreatmentDescription] = useState("");
  const [timeOfYear, setTimeOfYear] = useState("");

  //La función Handlesubmit es la que se ejecuta cuando el user hace click en el botón submit.
  const handleSubmit = () => {
    event.preventDefault();

    const newTreatment = {
      treatmentDescription,
      timeOfYear,
    };

    const response = axios
      .post(`${import.meta.env.VITE_SERVER_URL}/treatments`, newTreatment)
      .then(() => {
        navigate("/treatments");
      })
      .catch((error) => {
        console.log(error);
      });

      navigate(-1)
  };
  //Aqui cierra la función handleSubmit

  return (
    <div>
      <Card className="treatment-card">
        <form className="treatment-form" onSubmit={handleSubmit}>
          <label>
            <h6>Treatment Description:</h6>
            <input
              type="text"
              name="treatmentDescription"
              placeholder="Treatment Description"
              value={treatmentDescription}
              onChange={(event) => {
                setTreatmentDescription(event.target.value);
              }}
            />
          </label>

          <label>
            <h6>Time of year:</h6>
            <input
              type="text"
              name="timeOfYear"
              placeholder="Time of Year"
              value={timeOfYear}
              onChange={(event) => {
                setTimeOfYear(event.target.value);
              }}
            />
          </label>
          <Button variant="success" type="submit">
            Submit
          </Button>
          <Link to={"/treatments"}>
          <Button variant="secondary" type="button">
            Cancel
          </Button>
            </Link>
        </form>
      </Card>
    </div>
  );
}
export default AddTreatment;
