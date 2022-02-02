import { Row } from 'react-bootstrap';
import CountryComponent from './components/CountryComponent';

const CountryContainer = () => {
  const array = [{ id: 0, name: 'egypt', airIdx: 2 }, { id: 1, name: 'egypt', airIdx: 2 }, { id: 2, name: 'egypt', airIdx: 2 }, { id: 3, name: 'egypt', airIdx: 2 }, { id: 4, name: 'egypt', airIdx: 2 }];

  return (
    <Row xs={2} md={3} className="g-4 ms-0 me-0">
      {array.map((country) => (
        <CountryComponent
          key={country.id}
          country={country}
        />
      ))}
    </Row>
  );
};

export default CountryContainer;
