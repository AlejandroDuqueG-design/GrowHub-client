import { Link } from "react-router";

function PlantDetailsPage() {
  return (
    <div className="plant-details-card">
      <h4>Plant Details</h4>
      <Link to="/add-new-plant">
      <button>Add New Plant</button>
      </Link>
    </div>
  );
}
export default PlantDetailsPage;
