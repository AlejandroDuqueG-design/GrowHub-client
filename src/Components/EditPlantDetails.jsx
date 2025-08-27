import { Card } from "react-bootstrap";

function EditPlantDetails({onCancel}) {


  return (
    <div>
      <Card >
        <form className="plant-form">
          <label>
            <h6>Common Name:</h6>
            <input type="text" name="commonName" placeholder="common name" />
          </label>

          <label>
            <h6>Scientific Name:</h6>
            <input type="text" name="scientificName" placeholder="scientific name" />
          </label>

          <label>
            <h6>Type: </h6>
            <select name="type">
              <option value="">Select Type</option>
              <option value="Tree">Tree</option>
              <option value="Shrub">Shrub</option>
              <option value="Succulent">Succulent</option>
              <option value="Cactus">Cactus</option>
              <option value="Climber">Climber</option>
            </select>
          </label>

          <label>
            <h6>Watering:</h6>
            <input type="text" name="Watering" placeholder="watering" />
          </label>

          <label>
            <h6>Sunlight:</h6>
            <input type="text" name="Sunlight" placeholder="sunlight" />
          </label>

          <label>
            <h6>Description:</h6>
            <input type="text" name="Description" placeholder="description" />
          </label>

          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>Cancel</button>

        </form>
      </Card>
      
    </div>
  );
}
export default EditPlantDetails;
