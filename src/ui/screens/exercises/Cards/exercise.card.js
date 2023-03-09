import {
  Card, Container, Stack,
} from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import useExercises from '../../../../core/provider/exercises/use';

export default function ExerciseCard(props) {
  // eslint-disable-next-line react/prop-types
  const { selectExercise } = props;
  // eslint-disable-next-line react/prop-types
  const { exerciseNumber } = props;
  const {
    state: {
      locking, exerciseList, finishedNumber,
    },
  } = useExercises();

  function getExercise(number) {
    const exercise = exerciseList.find((e) => e.number === number);
    return exercise;
  }
  console.log(exerciseNumber);
  const currentExercise = getExercise(exerciseNumber);

  if ((locking) && (currentExercise.number > (finishedNumber + 1))) {
    return (
      <Card style={{ width: '15rem', height: '15rem', marginBottom: '1rem' }} className="green-card">
        <Card.Body>
          <Card.Title className="white-text">{currentExercise.name}</Card.Title>
          <Card.Text><i style={{ fontSize: '50px' }} className="material-icons yellow-text">lock</i></Card.Text>
        </Card.Body>
      </Card>
    );
  }
  return (
    <Card style={{ width: '15rem', height: '15rem', marginBottom: '1rem' }} className={currentExercise.done ? 'yellow-card' : 'green-card'}>
      <Card.Body>
        <Card.Title className="white-text">{currentExercise.name}</Card.Title>
        <Card.Text>
          <Link onClick={() => selectExercise(currentExercise.number)} to="gamescreen">
            {currentExercise.done
              ? (
                <div>
                  <i style={{ fontSize: '30px' }} className="material-icons green-text">play_circle</i>
                  <hr />
                </div>
              )
              : <i style={{ fontSize: '50px' }} className="material-icons yellow-text">play_circle</i>}
          </Link>
          {currentExercise.done && (
          <Container fluid>
            <Stack direction="horizontal">
              <div>
                Finished in
                {(currentExercise.trys === 1)
                  ? (
                    <div>
                      {currentExercise.trys}
                      {' '}
                      try!
                    </div>
                  )
                  : (
                    <div>
                      {currentExercise.trys}
                      {' '}
                      tries!
                    </div>
                  )}
              </div>
              <i style={{ fontSize: '50px' }} className="material-icons green-text">done_outline</i>
            </Stack>
          </Container>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
