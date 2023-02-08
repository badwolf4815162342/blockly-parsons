/* eslint-disable camelcase */
import React, { useState } from 'react'; // useEffect()??
import StepWizardContext from './context';

// eslint-disable-next-line react/prop-types
export default function StepWizardProvider({ children }) {
  const [step, setStep] = useState(1);

  const value = React.useMemo(() => ({
    state: {
      step,
    },
    actions: {
      setStep,
    },
  }), [step, setStep,
  ]);

  return (
    <StepWizardContext.Provider value={value}>
      {children}
    </StepWizardContext.Provider>
  );
}
