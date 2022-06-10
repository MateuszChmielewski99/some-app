import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function NavBar() {
  return (
    <Container>
      <Navbar bg="dark" variant={"dark"}>
        <LinkContainer to="/">
          <Navbar.Brand>Some-App</Navbar.Brand>
        </LinkContainer>
        <Nav>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/page1">
            <Nav.Link>Page1</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/page2">
            <Nav.Link>Page2</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </Container>
  );
};