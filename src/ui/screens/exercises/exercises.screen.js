import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import useExercises from '../../../core/provider/exercises/use';

function ExercisesScreen() {
  const {
    state: { exerciseList, isLoading },
    actions: { setCurrentExerciseNumber },
  } = useExercises();

  const selectExercise = (num) => {
    console.log(exerciseList.length);
    setCurrentExerciseNumber(num);
  };

  return (
    <div className="exercises-screen">
      <Stack gap={3}>
        <div className="bg-light border">
          <h1>Blockly-Parsons</h1>
        </div>
        {(isLoading)
          ? <div className="spinner"><Spinner animation="grow" /></div>
          : (
            <ul>
              {exerciseList.map((exercise) => (
                <li key={exercise.number}>
                  <div className="bg-light border">
                    <Link onClick={() => selectExercise(exercise.number)} to="/gamescreen">{exercise.name}</Link>
                  </div>
                </li>
              ))}
            </ul>
          )}

      </Stack>
    </div>
  );
}

export default ExercisesScreen;
