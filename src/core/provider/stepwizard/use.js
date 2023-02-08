import { useContext } from 'react';
import StepWizardContext from './context';

export default function useStepWizard() {
  return useContext(StepWizardContext);
}
