import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router";

function MainNavBar() {
  return (
    <Navbar fixed="top" bg="success" data-bs-theme="dark" expand="lg" >
      <Container>
        <Navbar.Brand as={Link} to="/home"><img src="/src/assets/logogrowhub.png" width="40" height="50" className="d-inline-block align-center" alt="gowhub logo" /> GROWHUB </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/plantlist">All Plants</Nav.Link>
            <Nav.Link as={Link} to="/addnewplant">Add New Plant</Nav.Link>
            <Nav.Link as={Link} to="/treatments">Treatments</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <nav className="navBar">
    //   <div className="nav-logo">
    //     <Link to="/">
    //       <h2>
    //         <img src="/src/assets/logogrowhub.png" width="40"></img> GROWHUB
    //       </h2>
    //     </Link>
    //   </div>
    //   <div className="nav-links">
    //     <Link to="/"><button>Home</button></Link>
    //     <Link to="/plants"><button>All plants</button></Link>
    //     <Link to="/add-new-plant"><button>Add New Plant</button></Link>
    //     <Link to="/treatments"><button>Treatments</button></Link>
    //     <Link to="/profile"><img className="profile-logo" src="/src/assets/profileicon.png" width="40"></img></Link>
    //   </div>
    // </nav>
  );
}
export default MainNavBar;
