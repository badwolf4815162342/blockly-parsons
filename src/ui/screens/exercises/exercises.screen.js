import Stack from 'react-bootstrap/Stack';
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {
  Row, Col, Container, Button,
} from 'react-bootstrap';
import ExerciseCard from './Cards/exercise.card';
import useExercises from '../../../core/provider/exercises/use';
import HorizontalSpace from '../../utils/horizontalspace';

function ExercisesScreen() {
  const {
    state: { exerciseList, isLoading },
    actions: { setCurrentExerciseNumber, setReset },
  } = useExercises();

  const selectExercise = (num) => {
    // console.log(exerciseList.length);
    setCurrentExerciseNumber(num);
  };

  return (
    <div className="exercises-screen bg-home">
      <HorizontalSpace />
      <Stack gap={3}>
        <Container className="justify-content-center">
          <h1 className="dark-h1">EXERCISES</h1>
          <Container className="step-container white-text">
            <p>
              You have used Parsons Puzzles (PP) in some of the CS-1CT quizzes -
              they are the questions where you are given a problem and the lines
              of code for a program that will solve the problem, only the lines
              are in the wrong order - your task is to put them into the correct
              order.  To solve a PP, you have to imagine a plan or solution in your
              head, and then see how you can make the lines you have match to
              that plan/solution.

            </p>
            <p>
              We are evaluating a slightly different kind of Parsons Puzzle called
              a Blockly Parsons Puzzle (BPP).  In this version, we give a problem
              statement, as in a normal PP, only now, we give blocks of code (like
              Scratch if you’ve used that) and group them according to useful
              sub-goals for solving the problem - each group has a name above it.
              Your task is similar to a normal PP - you think of a plan or solution
              in your head, imagining the tasks you have to achieve to solve the
              problem - and then you see how those tasks match to the sub-goal names
              that have been provided for each group.  Once you’ve matched your
              plan to the sub-goals, you can click the blocks together to create
              the program.  Like a PP, but not quite!

            </p>
            <p>
              Well - it’s probably easier to understand by doing it - so go ahead -
              and note the sub-goal names are just blocks but with a red background -
              they shouldn’t be part of the program!

            </p>
          </Container>
        </Container>
        {(isLoading)
          ? <div className="spinner"><Spinner animation="grow" /></div>
          : (
            <Container>
              <Row className="exercises">
                {exerciseList.map((exercise) => (
                  <Col key={exercise.number}>
                    <ExerciseCard
                      selectExercise={selectExercise}
                      exerciseNumber={exercise.number}
                    />
                  </Col>
                ))}
              </Row>
            </Container>

          )}
        <Container>
          <Button className="next-button" onClick={() => { setReset(true); }}>RESET TRIES</Button>
        </Container>
      </Stack>
    </div>
  );
}

export default ExercisesScreen;
