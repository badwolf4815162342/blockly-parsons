/* eslint-disable camelcase */
import React, { useRef } from 'react';
import {
  Button, Navbar, Container, Spinner,
} from 'react-bootstrap';
import Wizard from 'step-wizard-react';
import useExercises from '../../../core/provider/exercises/use';
import HeadlineStep from './components/headline.step';
import ExerciseStep from './components/exercise.step';
import ExerciseCard from './components/Cards/exercisetext.card';

function GameScreen() {
  const {
    state: { isLoading, exerciseList, currentExerciseNumber },
  } = useExercises();

  const nextButtonRef = useRef();
  const backButtonRef = useRef();
  // const stepTitleRef = useRef();

  const values = {
    'Step 1':
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
  </Container>,
    'Step 2': <HeadlineStep />,
    'Step 3': <ExerciseStep />,
  };

  return (
    <div>

      <Navbar fixed="bottom" variant="dark" className="wizard-nav justify-content-center">
        <Button className="forwardbtn" size="sm" ref={backButtonRef}>
          <i className="material-icons">fast_rewind</i>
        </Button>
        <h1>
          ...
        </h1>
        <Button className="forwardbtn" size="sm" ref={nextButtonRef}>
          <i className="material-icons">fast_forward</i>
        </Button>
      </Navbar>

      <React.StrictMode>
        <Wizard
          values={values}
          nextButtonRef={nextButtonRef}
          backButtonRef={backButtonRef}
        />

      </React.StrictMode>
    </div>
  );
}

export default GameScreen;
