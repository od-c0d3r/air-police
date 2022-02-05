import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import { getCountry } from '../../utils/filter';

const CountryPageContainer = () => {
  const params = useParams();
  const data = useSelector((state) => state.airApp.filter);
  const country = getCountry(data, Number(params.countryId));
  const {
    data: {
      main: { aqi },
      components: {
        co, nh3, no, no2, o3, pm10, so2,
      },
    },
  } = country;

  const componentsList = [[aqi, 'AQI', 7], [co, 'Co', 0], [nh3, 'NH3', 1], [no, 'No', 2], [no2, 'No2', 3], [o3, 'O3', 4], [pm10, 'Pm10', 5], [so2, 'So2', 6]];
  return (
    <Container>
      <Row>
        <Col className="display-1">{country.name}</Col>
      </Row>
      {componentsList.map((component) => (
        <Row key={component[2]}>
          <Col>{component[1]}</Col>
          <Col>{component[0]}</Col>
        </Row>
      ))}
    </Container>
  );
};

export default CountryPageContainer;
