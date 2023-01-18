/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'; // useEffect()??
import ExercisesContext from './context';
import Exercises from '../../../exercise/exercises.json';

// eslint-disable-next-line react/prop-types
export default function ExercisesProvider({ children }) {
  const [exerciseList, setExerciseList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentExerciseNumber, setCurrentExerciseNumber] = useState(null);
  const [showInformationModalOnEntry, setShowInformationModalOnEntry] = useState(true);

  const value = React.useMemo(() => ({
    state: {
      isLoading,
      exerciseList,
      currentExerciseNumber,
      showInformationModalOnEntry,
    },
    actions: {
      setLoading,
      setExerciseList,
      setCurrentExerciseNumber,
      setShowInformationModalOnEntry,
    },
  }), [isLoading, exerciseList, currentExerciseNumber,
    showInformationModalOnEntry, setCurrentExerciseNumber]);

  useEffect(() => {
    function loadExercises() {
      setLoading(true);
      Exercises.exercises.forEach((exercise) => {
        const initialState = exerciseList;
        if (initialState.filter((e) => e.name === exercise.name).length === 0) {
          initialState.push({
            number: exercise.number,
            name: exercise.name,
            baseXml: exercise.baseXmlFile, // 'reader.readAsText(exercise.baseXmlFile)',
            unittest: exercise.unittestFile, // 'reader.readAsText(exercise.unittestFile)',
            trys: exercise.trys,
            text: exercise.text,
          });
          setExerciseList(initialState);
          setCurrentExerciseNumber(0);
        }
      });
      setLoading(false);
    }
    if (exerciseList.length === 0) {
      loadExercises();
    }
  }, [isLoading, exerciseList, currentExerciseNumber, setCurrentExerciseNumber]);

  return (
    <ExercisesContext.Provider value={value}>
      {children}
    </ExercisesContext.Provider>
  );
}
