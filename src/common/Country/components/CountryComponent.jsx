import { Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CountryComponent = (props) => {
  const { country } = props;

  return (
    <Col key={country.id}>
      <Card className="shadow-sm" onClick={() => console.log(`clicked ${country.id}`)}>
        <Card.Body>
          <Card.Title>{country.name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

CountryComponent.propTypes = {
  country: PropTypes.objectOf(PropTypes.object()).isRequired,
};

export default CountryComponent;
