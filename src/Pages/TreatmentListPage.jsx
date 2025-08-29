import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import TreatmentCard from "../Components/TreatmentCard";
import { Button, Container, Row, Col } from "react-bootstrap";

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
        console.log(response.data.treatments);
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
    // <div className="d-flex flex-column align-items-center min-vh-100 gap-3" >
    <Container className="text-center">
      <Row>
        <Col>
          <h5>Treatments</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Treatments related to the plants</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="success">Add New Treatment</Button>
        </Col>
      </Row>
      <Row>
        {treatments.map((eachTreatment) => {
          return (
            <Col xs={12} className="g-3" key={eachTreatment.id}>
              <TreatmentCard {...eachTreatment} />
            </Col>
          );
        })}
      </Row>
    </Container>

    // </div>
  );
}

export default TreatmentListPage;
