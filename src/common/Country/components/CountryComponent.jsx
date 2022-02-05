import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryComponent = ({ country }) => {
  const { data: { main: { aqi } } } = country;
  const idxs = {
    1: 'Good',
    2: 'Fair',
    3: 'Moderate',
    4: 'Poor',
    5: 'Very Poor',
  };
  const classNames = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
  };

  const rate = idxs[Number(aqi)];
  const getClassName = classNames[Number(aqi)];

  return (
    <Col>
      <Link variant="primary" className="cardLink" to={`/country/${country.id}`}>
        <Card className="shadow-sm">
          <Card.Body>
            <Card.Title>{country.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {`AQI: ${aqi}`}
            </Card.Subtitle>
            <Card.Text>
              <span className="d-block">
                Overall Quailty :
              </span>
              <span id="rate">
                <span className={getClassName}>
                  {rate}
                </span>
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

CountryComponent.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    data: PropTypes.shape([]),
  }).isRequired,
};

export default CountryComponent;
