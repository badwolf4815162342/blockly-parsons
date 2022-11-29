import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import React from 'react';
import useExercises from '../../../core/provider/exercises/use';

function ExercisesScreen() {
  const {
    state: { exerciseList },
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
        <ul>
          <li>
            <div className="bg-light border">
              <Link onClick={() => selectExercise(0)} to="/gamescreen">{exerciseList[0].name}</Link>
            </div>
          </li>
          <li>
            <div className="bg-light border">
              <Link onClick={() => selectExercise(1)} to="/gamescreen">{exerciseList[1].name}</Link>
            </div>
          </li>
          <li>
            <div className="bg-light border">
              <Link onClick={() => selectExercise(2)} to="/gamescreen">{exerciseList[2].name}</Link>
            </div>
          </li>
          <li>
            <div className="bg-light border">
              <Link onClick={() => selectExercise(3)} to="/gamescreen">{exerciseList[3].name}</Link>
            </div>
          </li>
        </ul>
      </Stack>
    </div>
  );
}

export default ExercisesScreen;
