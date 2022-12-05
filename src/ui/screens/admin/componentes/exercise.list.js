import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
import useExercises from '../../../../core/provider/exercises/use';

function ExerciseList() {
  const [isLoading, setIsLoading] = useState(true);

  const {
    state: { exerciseList, currentExerciseNumber },
    actions: { setCurrentExerciseNumber },
  } = useExercises();

  useEffect(() => {
    setIsLoading(false);
  });

  const selectExercise = (num) => {
    console.log(num);
    setCurrentExerciseNumber(num);
  };

  return (
    (isLoading)
      ? <div className="spinner"><Spinner animation="grow" /></div>
      : (
        <ListGroup as="ul">
          {exerciseList.map((exercise) => (
            <ListGroup.Item
              key={exercise.number}
              as="li"
              active={exercise.number === currentExerciseNumber}
              onClick={() => selectExercise(exercise.number)}
            >
              {exercise.name}
            </ListGroup.Item>
          ))}
          <ListGroup.Item
            key={exerciseList.length}
            as="li"
            onClick={() => selectExercise(exerciseList.length)}
          >
            <Button variant="primary" type="submit">
              New Exercise
            </Button>
          </ListGroup.Item>
        </ListGroup>
      )
  );
}

export default ExerciseList;
