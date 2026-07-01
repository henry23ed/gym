import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { FaDumbbell } from "react-icons/fa";
import { styles } from "../styles/styles";

function Navigation({ smoothScrollTo }) {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      style={styles.navbar}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("home");
          }}
          style={styles.brand}
        >
          <FaDumbbell className="me-2" />
          LAVISTA GYM & FITNESS HUB
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link role="button" onClick={() => smoothScrollTo("home")}>
              Home
            </Nav.Link>

            <Nav.Link role="button" onClick={() => smoothScrollTo("about")}>
              About
            </Nav.Link>

            <Nav.Link role="button" onClick={() => smoothScrollTo("classes")}>
              Classes
            </Nav.Link>

            <Nav.Link role="button" onClick={() => smoothScrollTo("pricing")}>
              Pricing
            </Nav.Link>

            <Nav.Link role="button" onClick={() => smoothScrollTo("contact")}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;