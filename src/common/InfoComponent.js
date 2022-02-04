import { useState } from 'react';
import { Alert, Button, Table } from 'react-bootstrap';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const InfoComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Alert id="alert-window" show={show} variant="success" className="d-flex flex-column justify-content-between">
        <div>
          <Alert.Heading>Info</Alert.Heading>
          <p>
            Due to OpenWeatherAPI number of API calls limitations we had to reduce
            the number of countries that we call the API for.
          </p>
          <p>
            So we choose the most 20 populated countries in Africa.
          </p>
          <hr />
          <Alert.Heading>Indexs Table</Alert.Heading>
          <Table striped hover>
            <thead>
              <tr>
                <th>Qualitative name</th>
                <th>Index</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Good</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Fair</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Moderate</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Poor</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Very Poor</td>
                <td>5</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="d-flex justify-content-start">
          <Button variant="warning" onClick={() => setShow(false)}>Close Info</Button>
        </div>
      </Alert>

      {!show && <HiOutlineExclamationCircle id="info" onClick={() => setShow(true)} />}
    </>
  );
};

export default InfoComponent;
