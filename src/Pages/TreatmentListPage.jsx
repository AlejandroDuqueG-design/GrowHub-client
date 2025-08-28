import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import TreatmentCard from "../Components/TreatmentCard";

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
    <div>
      <h4>Treatments</h4>
      <div><button>Add New Treatment</button></div>
      <ul>
        {treatments.map((eachTreatment) => {
          return <TreatmentCard key={eachTreatment.id} {...eachTreatment} />;
        })}
       
      </ul>
    </div>
  );
}

export default TreatmentListPage;
