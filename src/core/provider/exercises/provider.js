/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'; // useEffect()??
import ExercisesContext from './context';
import Exercises from '../../../exercise/exercises.json';
import ExercisesB from '../../../exercise/exercisesB.json';

// eslint-disable-next-line react/prop-types
export default function ExercisesProvider({ children }) {
  const [exerciseList, setExerciseList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [reset, setReset] = useState(false);
  const [reload, setReload] = useState(false);
  const [locking, setLocking] = useState(false);
  const [isGroupA, setIsGroupA] = useState(true);
  const [currentExerciseNumber, setCurrentExerciseNumber] = useState(null);
  const [finishedNumber, setFinishedNumber] = useState(-1);
  const [showInformationModalOnEntry, setShowInformationModalOnEntry] = useState(true);

  const value = React.useMemo(() => ({
    state: {
      reset,
      reload,
      isLoading,
      exerciseList,
      currentExerciseNumber,
      showInformationModalOnEntry,
      locking,
      finishedNumber,
      isGroupA,
    },
    actions: {
      setReset,
      setReload,
      setLoading,
      setExerciseList,
      setCurrentExerciseNumber,
      setShowInformationModalOnEntry,
      setLocking,
      setFinishedNumber,
      setIsGroupA,
    },
  }), [isLoading, exerciseList, currentExerciseNumber,
    showInformationModalOnEntry, setCurrentExerciseNumber, setExerciseList, locking, isGroupA]);

  useEffect(() => {
    function loadExercises() {
      const initialState = [];
      if (isGroupA) {
        Exercises.exercises.forEach((exercise) => {
          if (initialState.filter((e) => e.number === exercise.number).length === 0) {
            initialState.push({
              number: exercise.number,
              name: exercise.name,
              baseXml: exercise.baseXmlFile, // 'reader.readAsText(exercise.baseXmlFile)',
              unittest: exercise.unittestFile, // 'reader.readAsText(exercise.unittestFile)',
              trys: exercise.trys,
              startZoomLevel: exercise.startZoomLevel,
              testingOutput: exercise.testingOutput,
              text: exercise.text,
              done: false,
            });
          }
        });
      } else {
        ExercisesB.exercises.forEach((exercise) => {
          if (initialState.filter((e) => e.number === exercise.number).length === 0) {
            initialState.push({
              number: exercise.number,
              name: exercise.name,
              baseXml: exercise.baseXmlFile, // 'reader.readAsText(exercise.baseXmlFile)',
              unittest: exercise.unittestFile, // 'reader.readAsText(exercise.unittestFile)',
              trys: exercise.trys,
              startZoomLevel: exercise.startZoomLevel,
              testingOutput: exercise.testingOutput,
              text: exercise.text,
              done: false,
            });
          }
        });
      }
      setReset(false);
      setReload(false);
      setExerciseList(initialState);
      // set beginning currentExerciseNumber
      setCurrentExerciseNumber(0);
      setFinishedNumber(-1);
    }
    if (exerciseList.length === 0 || reset || reload) {
      setLoading(true);
      const storageExerciseList = localStorage.getItem('exercises');
      // reload currentExerciseNumber if refresh was done
      if (!currentExerciseNumber && !reload) {
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
        const storageIsGroupA = localStorage.getItem('isGroupA');
        if (storageIsGroupA) {
          if (storageIsGroupA !== isGroupA) {
            setIsGroupA(JSON.parse(storageIsGroupA));
            console.log('Set group from storage');
            console.log(storageIsGroupA);
          }
        }
      }
      if (storageExerciseList && !reset && !reload) {
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
        setLoading(false);
      }
    }
    // Save each time the exerciseList value changes
    localStorage.setItem('exercises', JSON.stringify(exerciseList));
    localStorage.setItem('finished', JSON.stringify(finishedNumber));
    localStorage.setItem('locking', JSON.stringify(locking));
    localStorage.setItem('isGroupA', JSON.stringify(isGroupA));
    console.log('Save group to storage');
    console.log(isGroupA);
    localStorage.setItem('currentExerciseNumber', JSON.stringify(currentExerciseNumber));
  }, [isLoading, exerciseList, currentExerciseNumber, reset, finishedNumber, locking, isGroupA]);

  return (
    <ExercisesContext.Provider value={value}>
      {children}
    </ExercisesContext.Provider>
  );
}
