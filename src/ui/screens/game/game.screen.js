/* eslint-disable camelcase */
import React from 'react';
import {
  Button, Stack,
} from 'react-bootstrap';
import { Steps, Step, Wizard } from 'react-albus';
import ExplanationStep from './components/explanation.step';
import ExerciseStep from './components/exercise.step';
import HeadlineStep from './components/headline.step';
import useStepWizard from '../../../core/provider/stepwizard/use';
import HorizontalSpace from '../../utils/horizontalspace';
import useGame from '../../../core/provider/game/use';

function GameScreen() {
  const { actions: { setStep } } = useStepWizard();
  const { actions: { setTries } } = useGame();

  return (
    <div>

      <Wizard>
        <Steps>
          <Step
            id="merlin"
            render={({ next }) => (
              <div>
                <ExplanationStep />
                <div className="next-wrapper">
                  <Button className="next-button-white" onClick={() => { next(); setStep(2); }}>
                    <Stack direction="horizontal">
                      <i style={{ fontSize: '20px', fontWeight: '800' }} className="material-icons">arrow_forward</i>
                      <h5 style={{ marginBottom: '0px' }}>GO TO STEP 2</h5>
                    </Stack>
                  </Button>
                </div>
              </div>
            )}
          />
          <Step
            id="gandalf"
            render={({ next, previous }) => (
              <div>
                <HeadlineStep />
                <HorizontalSpace />
                <Button className="next-button" onClick={() => { previous(); setStep(1); }}>Go Back to Step 1</Button>
                <div className="next-wrapper">
                  <Button className="next-button-white" onClick={() => { next(); setStep(3); setTries(0); }}>
                    <Stack direction="horizontal">
                      <i style={{ fontSize: '20px', fontWeight: '800' }} className="material-icons">arrow_forward</i>
                      <h5 style={{ marginBottom: '0px' }}>GO TO STEP 3</h5>
                    </Stack>
                  </Button>
                </div>
              </div>
            )}
          />
          <Step
            id="dumbledore"
            render={({ previous }) => (
              <div>
                <ExerciseStep />
                <HorizontalSpace />
                <Button className="next-button" onClick={() => { previous(); setStep(2); }}>Go Back to Step 2</Button>
              </div>
            )}
          />
        </Steps>
      </Wizard>
    </div>
  );
}

export default GameScreen;
