import { useContext } from 'react';
import ExercisesContext from './context';

export default function useExercises() {
  return useContext(ExercisesContext);
}
