import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/Navbar";

function CoolNavbar() {
  return (<Navbar fixed="top" bg="primary" data-bs-theme="light">
    <Container>
      <Navbar.Brand>Ethan Williams</Navbar.Brand>
      <Nav>
        <Nav.Link href="home">Home</Nav.Link>
        <Nav.Link href="projects">Portfolio</Nav.Link>
        <Nav.Link href="services">Services</Nav.Link>
        <Nav.Link href="contact">Contact Me</Nav.Link>
      </Nav>
    </Container>
  </Navbar>);
}

export default CoolNavbar;
