/* eslint-disable camelcase */
import React from 'react';
import {
  Stack, Card,
} from 'react-bootstrap';
import useStepWizard from '../../../../core/provider/stepwizard/use';
import VerticalSpace from '../../../utils/verticalspace';

// TODO: only show until 900px or remove admin

export default function WizardNavBar() {
  const { state: { step } } = useStepWizard();

  // onClick={() => setStep(1)}

  return (
    <div>
      <Stack direction="horizontal" className="justify-content-center">
        <Card className={step === 1 ? 'selected-step' : 'step'}>
          <Card.Body style={{ padding: '0px' }}>
            <div>1</div>
          </Card.Body>
        </Card>
        <VerticalSpace />

        <div className="light-red-text">
          ...
        </div>
        <VerticalSpace />

        <Card className={step === 2 ? 'selected-step' : 'step'}>
          <Card.Body style={{ padding: '0px' }}><div>2</div></Card.Body>
        </Card>
        <VerticalSpace />

        <div className="light-red-text">
          ...
        </div>
        <VerticalSpace />

        <Card className={step === 3 ? 'selected-step' : 'step'}>
          <Card.Body style={{ padding: '0px' }}><div>3</div></Card.Body>
        </Card>
      </Stack>
    </div>
  );
}
