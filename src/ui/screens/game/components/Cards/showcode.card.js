import {
  Card,
} from 'react-bootstrap';
import ShowCode from '../showCode';

export default function ShowCodeCard() {
  return (
    <Card>
      <Card.Body>
        <p>Current status of your solution:</p>
        <ShowCode />
      </Card.Body>
    </Card>
  );
}
