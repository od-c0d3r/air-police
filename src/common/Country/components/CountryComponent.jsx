import { Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryComponent = ({ country }) => (
  <Col key={country.id}>
    <Link variant="primary" className="cardLink" to={`/country/${country.id}`}>
      <Card className="shadow-sm" to={`/country/${country.id}`} onClick={() => console.log(`clicked ${country.id}`)}>
        <Card.Body>
          <Card.Title>{country.name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural.
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  </Col>
);

CountryComponent.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default CountryComponent;
