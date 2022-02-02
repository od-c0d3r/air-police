import { Card, Col, Row } from 'react-bootstrap';

const HomePageContainer = () => {
  const array = [{ id: 0, name: 'egypt', airIdx: 2 }, { id: 1, name: 'egypt', airIdx: 2 }, { id: 2, name: 'egypt', airIdx: 2 }, { id: 3, name: 'egypt', airIdx: 2 }, { id: 4, name: 'egypt', airIdx: 2 }];

  return (
    <Row xs={2} md={3} className="g-4 ms-0 me-0">
      {array.map((country) => (
        <Col key={country.id}>
          <Card>
            <Card.Body>
              <Card.Title>{country.name}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default HomePageContainer;
