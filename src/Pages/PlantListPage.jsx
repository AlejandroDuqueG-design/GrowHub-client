import { Link } from "react-router";
import PlantCard from "../Components/PlantCard";
import { useEffect, useState } from "react";
import axios from "axios";

function PlantListPage() {
  const [plantsList, setPlantList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/plants`);
      console.log(response);
      setPlantList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="plant-list-general">
      <h3>All our plants</h3>
      
      <p>Here is a list with all the plants added by our users. Every card contains plant basic info like: common name, scientific name and type.</p>
      {plantsList.map((eachPlant) => {
        return <PlantCard key={eachPlant.id} {...eachPlant} />;
      })}
      <Link to="/plant-details"></Link>
    </div>
  );
}
export default PlantListPage;
