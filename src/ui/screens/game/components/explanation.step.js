import {
  Container, Spinner,
} from 'react-bootstrap';
import React from 'react';
import ExerciseCard from './Cards/exercisetext.card';
import useExercises from '../../../../core/provider/exercises/use';

export default function ExplanationStep() {
  const {
    state: { isLoading, currentExerciseNumber, exerciseList },
  } = useExercises();

  return (
    <Container className="step-container">
      {(isLoading) ? <div className="spinner"><Spinner animation="grow" /></div>
        : (
          <Container>
            <h1>

              {`Welcome to the Exercise: ${exerciseList[currentExerciseNumber].name}`}
            </h1>
            <p>
              At first try to think about how you would solve the
              problem, maybe try out scribbling some rough program
              plan on a piece of paper ... When you are finished, go
              to the next step.

            </p>
          </Container>
        )}
      <ExerciseCard />
    </Container>
  );
}
