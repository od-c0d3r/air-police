import {
  Container,
  Form,
  FormControl,
  Navbar,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <Navbar bg="light">
    <Container fluid>
      <Navbar.Brand>
        <NavLink to="/" className="navLink">AirPolice</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Filter by Country Name"
          className="me-2"
          aria-label="🔍"
        />
      </Form>
    </Container>
  </Navbar>
);

export default Header;
