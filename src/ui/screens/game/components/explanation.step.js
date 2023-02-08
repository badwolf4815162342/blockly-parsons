import {
  Container, Spinner, Row, Col,
} from 'react-bootstrap';
import React from 'react';
import ExerciseCard from './Cards/exercisetext.card';
import useExercises from '../../../../core/provider/exercises/use';
import HorizontalSpace from '../../../utils/horizontalspace';
import useStepWizard from '../../../../core/provider/stepwizard/use';

export default function ExplanationStep() {
  const {
    state: { isLoading },
  } = useExercises();
  const { actions: { setStep } } = useStepWizard();

  setStep(1);

  return (
    <div>
      <HorizontalSpace />
      {(isLoading) ? <div className="spinner"><Spinner animation="grow" /></div>
        : (
          <Container>
            <Row>
              <Col sm={2} />
              <Col sm={8}>

                <h1 className="white-text">
                  Welcome to step 1 of the Exercise!
                </h1>
                <p className="white-text">
                  At first try to think about how you would solve the
                  problem, maybe try out scribbling some rough program
                  plan on a piece of paper ... When you are finished, go
                  to the next step.

                </p>
                <ExerciseCard />
              </Col>
              <Col sm={2} />
            </Row>

          </Container>
        )}
    </div>
  );
}
