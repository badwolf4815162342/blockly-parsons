/* eslint-disable camelcase */
import React from 'react';
import {
  Button, Stack, Container,
} from 'react-bootstrap';
import { Steps, Step, Wizard } from 'react-albus';
import ExplanationStep from './components/explanation.step';
import ExerciseStep from './components/exercise.step';
import HeadlineStep from './components/headline.step';
import VerticalSpace from '../../utils/verticalspace';

function WizardNavBar(props) {
  // eslint-disable-next-line react/prop-types
  const { next } = props;
  // eslint-disable-next-line react/prop-types
  const { previous } = props;

  let currentNumber = 1;
  let step1Button = previous;
  let step2Button = previous;
  let step3Button = next;

  if (previous === null) {
    currentNumber = 1;
    step1Button = null;
    step2Button = next;
    step3Button = null;
  } else if (next === null) {
    currentNumber = 3;
    step1Button = null;
    step2Button = previous;
    step3Button = null;
  } else {
    currentNumber = 2;
    step1Button = previous;
    step2Button = null;
    step3Button = next;
  }

  return (
    <div className="wizard-nav">
      <Container className="justify-content-center">
        <Stack direction="horizontal" className="justify-content-center wizard-nav">
          <h1>
            Steps:
          </h1>
          <VerticalSpace />
          <Button className={currentNumber === 3 ? 'forwardbtn-grey' : 'forwardbtn'} disabled={currentNumber === 1} size="sm" onClick={step1Button}>
            1
          </Button>
          ...
          <Button className="forwardbtn" disabled={currentNumber === 2} size="sm" onClick={step2Button}>
            2
          </Button>
          ...
          <Button className={currentNumber === 1 ? 'forwardbtn-grey' : 'forwardbtn'} disabled={currentNumber === 3} size="sm" onClick={step3Button}>
            3
          </Button>
        </Stack>
      </Container>
    </div>
  );
}

function GameScreen() {
  return (
    <div>

      <Wizard>
        <Steps>
          <Step
            id="merlin"
            render={({ next }) => (
              <div>
                <ExplanationStep />
                <WizardNavBar next={next} previous={null} />
              </div>
            )}
          />
          <Step
            id="gandalf"
            render={({ next, previous }) => (
              <div>
                <HeadlineStep />
                <WizardNavBar next={next} previous={previous} />
              </div>
            )}
          />
          <Step
            id="dumbledore"
            render={({ previous }) => (
              <div>
                <ExerciseStep />
                +
                {' '}
                <WizardNavBar next={null} previous={previous} />
              </div>
            )}
          />
        </Steps>
      </Wizard>
    </div>
  );
}

export default GameScreen;
