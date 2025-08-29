import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PlantCardDetails from "../Components/PlantCardDetails";

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
    <div className="plant-details-container min-vh-100">
      <div className="">
        <h5>Plant Details</h5>
        <p>This a more detail information regarding each plant, data like: watering, sunlight and plant description are included here</p>
      </div>

      <div className="">
        <PlantCardDetails {...plantDetails} />
      </div>
    </div>
  );
}
export default PlantDetailsPage;
