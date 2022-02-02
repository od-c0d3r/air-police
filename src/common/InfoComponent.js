import { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const InfoComponent = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert id="alert-window" show={show} variant="success">
        <Alert.Heading>How&apos;s it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)}>Close Alert</Button>
        </div>
      </Alert>

      {!show && <HiOutlineExclamationCircle id="info" onClick={() => setShow(true)} />}
    </>
  );
};

export default InfoComponent;
