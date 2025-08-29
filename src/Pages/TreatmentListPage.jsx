import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import TreatmentCard from "../Components/TreatmentCard";
import { Button } from "react-bootstrap";

function TreatmentListPage() {
  const [treatments, setTreatments] = useState([]);

  const params = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      if (params.plantId) {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/plants/${params.plantId}?_embed=treatments`); 
        console.log(response.data.treatments)
         setTreatments(response.data.treatments);
      } else {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/treatments`);
        setTreatments(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex flex-column px-4 align-items-center min-vh-100 gap-3" >
      <h5 >Treatments</h5>
      <p >Treatments related to the plants</p>
      <Button  variant="success">Add New Treatment</Button>
      
      
        {treatments.map((eachTreatment) => {
          return <TreatmentCard key={eachTreatment.id} {...eachTreatment} />;
        })}
       
    </div>
  );
}

export default TreatmentListPage;
