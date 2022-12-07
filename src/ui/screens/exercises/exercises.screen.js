import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {
  Card, Row, Col, Container,
} from 'react-bootstrap';
import useExercises from '../../../core/provider/exercises/use';

function ExercisesScreen() {
  const {
    state: { exerciseList, isLoading },
    actions: { setCurrentExerciseNumber },
  } = useExercises();

  const selectExercise = (num) => {
    console.log(exerciseList.length);
    setCurrentExerciseNumber(num);
  };

  return (
    <div className="exercises-screen">
      <Stack gap={3}>
        <Container className="justify-content-center">
          <h1>Exercises</h1>
        </Container>
        {(isLoading)
          ? <div className="spinner"><Spinner animation="grow" /></div>
          : (
            <Row className="exercises">
              {exerciseList.map((exercise) => (
                <Col key={exercise.number}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{exercise.name}</Card.Title>
                      <Card.Text>
                        <Link onClick={() => selectExercise(exercise.number)} to="gamescreen"><h1>▶️</h1></Link>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}

            </Row>

          )}

      </Stack>
    </div>
  );
}

export default ExercisesScreen;
