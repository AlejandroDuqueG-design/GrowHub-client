import axios from "axios";
import { useState } from "react";
import { Card } from "react-bootstrap";
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

    <div>
    
      <Card className="treatment-card">
        <form className="treatment-form">
          <label>
            <h6>Treatment Description:</h6>
            <input
              type="text"
              name="treatmentDescription"
              placeholder="Treatment Description"
              value={treatmentDescriptionValue}
              onChange={(event) => {
                setTreatmentDescriptionValue(event.target.value);
              }}
            />
          </label>

          <label>
            <h6>Time of year:</h6>
            <input
              type="text"
              name="timeOfYear"
              placeholder="Time of Year"
              value={timeOfYearValue}
              onChange={(event) => {
                setTimeOfYearValue(event.target.value);
              }}
            />
          </label>
        </form>
        <Link to="/add-new-treatment">
          
        </Link>
        <button onClick={handleDelete}>Delete treatment</button>
      </Card>
      
    </div>
  );
}
export default TreatmentCard;
