import { Card, Col, Container, Row } from "react-bootstrap";

function HomePage() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Card className="text-center">
            <Card.Header as={"h3"} className="bg-light">
              GrowHub
            </Card.Header>
            <Card.Body>
              <Card.Title>Your Green Collection, Organized.</Card.Title>
              <Card.Text>
                GrowHub is your plant inventory app where you can have a control over your plants, you can make a list of your plants, including the
                plant common name, scientific name, type of plant, watering routines, sunlight and a breve description. edit that list, add new
                plants, delete existing plants. Also, you will be able to check on possible treatments for everyplant.
              </Card.Text>
              <Card.Img className="w-25 h-25" variant="bottom" src="/src/assets/logogrowhub.png" alt="Logo GrowHub" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default HomePage;
