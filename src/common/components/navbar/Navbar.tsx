import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Navbar.css"

export const NavBar = () => {
  return (
      <Navbar bg="dark" variant={"dark"} className="padding10">
        <Navbar.Brand>Some-App</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/starwars">StarWars</Nav.Link>
          <Nav.Link as={Link} to="/page2">Page2</Nav.Link>
        </Nav>
      </Navbar>
  );
};