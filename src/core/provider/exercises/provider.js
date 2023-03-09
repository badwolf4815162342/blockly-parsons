/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'; // useEffect()??
import ExercisesContext from './context';
import Exercises from '../../../exercise/exercises.json';

// eslint-disable-next-line react/prop-types
export default function ExercisesProvider({ children }) {
  const [exerciseList, setExerciseList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [reset, setReset] = useState(false);
  const [locking, setLocking] = useState(true);
  const [currentExerciseNumber, setCurrentExerciseNumber] = useState(null);
  const [finishedNumber, setFinishedNumber] = useState(-1);
  const [showInformationModalOnEntry, setShowInformationModalOnEntry] = useState(true);

  const value = React.useMemo(() => ({
    state: {
      reset,
      isLoading,
      exerciseList,
      currentExerciseNumber,
      showInformationModalOnEntry,
      locking,
      finishedNumber,
    },
    actions: {
      setReset,
      setLoading,
      setExerciseList,
      setCurrentExerciseNumber,
      setShowInformationModalOnEntry,
      setLocking,
      setFinishedNumber,
    },
  }), [isLoading, exerciseList, currentExerciseNumber,
    showInformationModalOnEntry, setCurrentExerciseNumber, setExerciseList, locking]);

  useEffect(() => {
    function loadExercises() {
      const initialState = [];
      Exercises.exercises.forEach((exercise) => {
        if (initialState.filter((e) => e.number === exercise.number).length === 0) {
          initialState.push({
            number: exercise.number,
            name: exercise.name,
            baseXml: exercise.baseXmlFile, // 'reader.readAsText(exercise.baseXmlFile)',
            unittest: exercise.unittestFile, // 'reader.readAsText(exercise.unittestFile)',
            trys: exercise.trys,
            startZoomLevel: exercise.startZoomLevel,
            text: exercise.text,
            done: false,
          });
        }
      });
      setReset(false);
      setExerciseList(initialState);
      setCurrentExerciseNumber(0);
    }
    if (exerciseList.length === 0 || reset) {
      setLoading(true);
      const storageExerciseList = localStorage.getItem('exercises');
      // reload currentExerciseNumber if refresh was done
      if (!currentExerciseNumber) {
        const storageCurrentExerciseNumber = localStorage.getItem('currentExerciseNumber');
        if (storageCurrentExerciseNumber) {
          setCurrentExerciseNumber(JSON.parse(storageCurrentExerciseNumber));
        }
        const storageFinishedNumber = localStorage.getItem('finished');
        if (storageFinishedNumber) {
          setFinishedNumber(JSON.parse(storageFinishedNumber));
        }
        const storageLocking = localStorage.getItem('locking');
        if (storageLocking) {
          setLoading(JSON.parse(storageLocking));
        }
      }
      if (storageExerciseList && !reset) {
        // load list from local storage
        console.log(JSON.parse(storageExerciseList));
        if (JSON.stringify(exerciseList) !== JSON.stringify(storageExerciseList)) {
          setExerciseList(JSON.parse(storageExerciseList));
        }
        setLoading(false);
      } else {
        // Load list from json
        loadExercises();
        localStorage.setItem('exercises', JSON.stringify(exerciseList));
        // set beginning currentExerciseNumber
        setCurrentExerciseNumber(0);
        setFinishedNumber(-1);
        setLoading(false);
      }
    }
    // Save each time the exerciseList value changes
    localStorage.setItem('exercises', JSON.stringify(exerciseList));
    localStorage.setItem('finished', JSON.stringify(finishedNumber));
    localStorage.setItem('locking', JSON.stringify(locking));
    localStorage.setItem('currentExerciseNumber', JSON.stringify(currentExerciseNumber));
  }, [isLoading, exerciseList, currentExerciseNumber, reset, finishedNumber, locking]);

  return (
    <ExercisesContext.Provider value={value}>
      {children}
    </ExercisesContext.Provider>
  );
}
