import { Row } from 'react-bootstrap';
import CountryComponent from './components/CountryComponent';
import { data } from '../../utils/filter';

const CountryContainer = () => (
  <Row xs={2} md={3} className="g-4 ms-0 me-0">
    {data.map((country) => (
      <CountryComponent
        key={country.id}
        country={country}
      />
    ))}
  </Row>
);

export default CountryContainer;
