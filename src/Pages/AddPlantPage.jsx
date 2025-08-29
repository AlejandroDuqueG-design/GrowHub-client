import AddPlantCard from "../Components/AddPlantCard";

function AddPlantPage() {
  return (
    <div className="d-flex flex-column px-4 min-vh-100">
      <h5>Add your own plant</h5>
      <p>Just filling the form, you would be able to add your own plant to our list, contributing to this plant library</p>
      <AddPlantCard />
    </div>
  );
}

export default AddPlantPage;
