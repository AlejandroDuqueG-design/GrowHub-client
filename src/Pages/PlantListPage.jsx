import { Link } from "react-router";
import PlantCard from "../Components/PlantCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Form, Row } from "react-bootstrap";

function PlantListPage() {
  const [plantsList, setPlantList] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    getData();
  }, [selectedType]);

  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/plants${selectedType ? `?type=${selectedType}` : ""}`);
      console.log(response);
      setPlantList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    //FILTRO
    <div className="d-flex flex-column px-4">
      <h5>All our plants</h5>
      <p>Here is a list with all the plants. Every card contains plant basic info like: common name, scientific name and type.</p>
      <Row className="justify-content-center">
        <Col xs={6}>
          <Form.Select className=""  name="type" value={selectedType} onChange={(event) => setSelectedType(event.target.value)}>
            <option value="">Filter by Type</option>
            <option value="Tree">Tree</option>
            <option value="Shrub">Shrub</option>
            <option value="Succulent">Succulent</option>
            <option value="Cactus">Cactus</option>
            <option value="Climber">Climber</option>
            <option value="Bush">Bush</option>
            <option value="Herbaceous Perennial">Herbaceous Perennial</option>
            <option value="Herbaceous Shrub">Herbaceous Shrub</option>
          </Form.Select>
        </Col>
      </Row>
      
      <div className="d-flex flex-column gap-4 my-4 align-items-center" >
        {plantsList.map((eachPlant) => {
          return <PlantCard key={eachPlant.id} {...eachPlant} />;
        })}
      </div>
      <Link to="/plant-details"></Link>
    </div>
  );
}
export default PlantListPage;
