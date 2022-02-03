import {
  Container,
  Form,
  FormControl,
  Navbar,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filterByName } from '../state/air/airSlice';

const Header = () => {
  const dispatch = useDispatch();

  return (
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
            onChange={(e) => dispatch(filterByName(e.target.value))}
          />
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
