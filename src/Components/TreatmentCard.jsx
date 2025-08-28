import { useState } from "react";
import { Card } from "react-bootstrap";

function TreatmentCard({id, plantId, treatmentDescription, timeOfYear}) {

  //const [plantIdValue, setPlantIdValue] = useState(plantId);
  const [treatmentDescriptionValue, setTreatmentDescriptionValue] = useState(treatmentDescription);
  const [timeOfYearValue, setTimeOfYearValue] = useState(timeOfYear);

  return (
    <div>
      <Card className="treatment-card">
        <form className="treatment-form">
          {/* <label>
            <h6>Plant Id:</h6>
            <input
              type="text"
              name="plantType"
              placeholder="Plant Type"
              value={plantIdValue} onChange={((event)=>{setPlantIdValue(event.target.value)})}/>
          </label> */}

          <label>
            <h6>Treatment Description:</h6>
            <input
              type="text"
              name="treatmentDescription"
              placeholder="Treatment Description"
              value={treatmentDescriptionValue}onChange={((event)=>{setTreatmentDescriptionValue(event.target.value)})}/>
          </label>

          <label>
            <h6>Time of year:</h6>
            <input
              type="text"
              name="timeOfYear"
              placeholder="Time of Year"
              value={timeOfYearValue}onChange={((event)=>{setTimeOfYearValue(event.target.value)})}/>
          </label>
        </form>
      </Card>
    </div>
  );
}
export default TreatmentCard;
