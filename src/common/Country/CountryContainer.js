import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import CountryComponent from './components/CountryComponent';

const CountryContainer = () => {
  const data = useSelector((state) => state.airApp.filter);

  return (
    <Row xs={2} md={3} className="g-4 ms-0 me-0">
      {data.map((country) => (
        <CountryComponent
          key={country.id}
          country={country}
        />
      ))}
    </Row>
  );
};

export default CountryContainer;
