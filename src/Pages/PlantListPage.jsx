import { Link } from "react-router";
import PlantCard from "../Components/PlantCard";
import { useEffect, useState } from "react";
import axios from "axios";

function PlantListPage() {
  const [plantsList, setPlantList] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    getData();
  }, [selectedType]);

  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/plants${selectedType ? `?type=${selectedType}`: "" }`);
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

      <select className="select-filter" name="type" value={selectedType} onChange={(event)=> setSelectedType(event.target.value)}>
        <option value="">Filter by Type</option>
        <option value="Tree">Tree</option>
        <option value="Shrub">Shrub</option>
        <option value="Succulent">Succulent</option>
        <option value="Cactus">Cactus</option>
        <option value="Climber">Climber</option>
        <option value="Bush">Bush</option>
        <option value="Herbaceous Perennial">Herbaceous Perennial</option>
        <option value="Herbaceous Shrub">Herbaceous Shrub</option>
      </select>

      {plantsList.map((eachPlant) => {
        return <PlantCard key={eachPlant.id} {...eachPlant} />;
      })}

      <Link to="/plant-details"></Link>
    </div>
  );
}
export default PlantListPage;
