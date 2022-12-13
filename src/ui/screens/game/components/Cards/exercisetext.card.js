import {
  Spinner, Card,
} from 'react-bootstrap';
import parse from 'html-react-parser';
import useExercises from '../../../../../core/provider/exercises/use';

export default function ExerciseCard() {
  const {
    state: { isLoading, exerciseList, currentExerciseNumber },
  } = useExercises();
  return (
    <Card>
      <Card.Body>
        <Card.Title>Exercise</Card.Title>
        <Card.Text>
          {(isLoading)
            ? <div className="spinner"><Spinner animation="grow" /></div>
            : (
              <div>
                {parse(exerciseList[currentExerciseNumber].text)}
              </div>
            )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
