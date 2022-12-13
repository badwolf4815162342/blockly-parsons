import {
  Card, Spinner,
} from 'react-bootstrap';
import Feedback from '../feedback';

export default function FeedbackCard(props) {
  // eslint-disable-next-line react/prop-types
  const { isLoadingGame } = props;
  return (
    <Card>
      <Card.Body>
        {isLoadingGame
          ? <div className="spinner"><Spinner animation="grow" /></div>
          : <Feedback />}
      </Card.Body>
    </Card>
  );
}
