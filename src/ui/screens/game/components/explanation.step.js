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
                  Take your time on this page.  Have a pen and some paper next to you.
                  Don’t move on until you’ve worked through the following steps:

                </p>
                <ul className="white-text">
                  <li>
                    Read the problem statement - at least two or more times.
                    Read every word!
                  </li>
                  <li>
                    Think about how you would solve this problem, as a human.
                    Think also of other problems you’ve seen like this.
                  </li>
                  <li>
                    What pieces, or sub-goals, or patterns, come to your mind when
                    you explore the problem?  Jot them down on the paper.
                  </li>
                </ul>
                <ExerciseCard />
              </Col>
              <Col sm={2} />
            </Row>

          </Container>
        )}
    </div>
  );
}
