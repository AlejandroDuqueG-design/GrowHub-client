import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router";

function MainNavBar() {
  return (
    // <Navbar fixed="top" bg="success" data-bs-theme="dark" expand="lg" >
    //   <Container>
    //     <Navbar.Brand href="/home"><img src="/src/assets/logogrowhub.png" width="40" height="50" className="d-inline-block align-center" alt="gowhub logo" /> GROWHUB </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="/home">Home</Nav.Link>
    //         <Nav.Link href="/plantlist">All Plants</Nav.Link>
    //         <Nav.Link href="/addnewplant">Add New Plant</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <nav>
      <Link to="/">
        <h2><img src="/src/assets/logogrowhub.png" width="40"></img> GROWHUB</h2>
        <button>Home</button>
      </Link>
      <Link to="/plant-list">
        <button>All plants</button>
      </Link>
      <Link to="/add-new-plant">
        <button>Add New Plant</button>
      </Link>
      <Link to="/profile">
        <img className="profile-logo" src="/src/assets/profileicon.png" width="40"></img>
      </Link>
    </nav>
  );
}
export default MainNavBar;
