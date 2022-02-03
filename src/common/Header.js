import {
  Container,
  Form,
  FormControl,
  Navbar,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filterByName, filterShowAll } from '../state/air/airSlice';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <Navbar bg="light">
      <Container fluid>
        <Navbar.Brand>
          <NavLink
            to="/"
            className="navLink"
            onClick={() => dispatch(filterShowAll())}
          >
            AirPolice
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Form
          className="d-flex"
          onSubmit={(e) => e.preventDefault()}
        >
          <FormControl
            id="inputSearch"
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
