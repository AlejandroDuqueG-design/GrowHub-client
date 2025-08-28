import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import PlantCardDetails from "../Components/PlantCardDetails";
import EditPlantDetails from "../Components/EditPlantDetails";

function PlantDetailsPage() {
  const [plantDetails, setPlantDetails] = useState([]);
  const params = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/plants/${params.plantId}`);
      setPlantDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="plant-details-container">
      <div className="plant-details-header">
        <h4>Plant Details</h4>


      </div>

      <div className="plant-details-card">
        <PlantCardDetails {...plantDetails} />
        
      </div>
    </div>
  );
}
export default PlantDetailsPage;
