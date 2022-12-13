import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {
  Card, Row, Col, Container,
} from 'react-bootstrap';
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
        <Container className="justify-content-center">
          <h1>Exercises</h1>
          <Container className="step-container">
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
              patterns for solving the problem - each group has a name above it.
              Your task is similar to a normal PP - you think of a plan or solution
              in your head, imagining the tasks you have to achieve to solve the
              problem - and then you see how those tasks match to the pattern names
              that have been provided for each group.  Once you’ve matched your
              plan to the block groups, you can click the blocks together to create
              the program.  Like a PP, but not quite!

            </p>
            <p>
              Well - it’s probably easier to understand by doing it - so go ahead -
              and note the block group names are just blocks but with a red background -
              they shouldn’t be part of the program!

            </p>
          </Container>
        </Container>
        {(isLoading)
          ? <div className="spinner"><Spinner animation="grow" /></div>
          : (
            <Row className="exercises">
              {exerciseList.map((exercise) => (
                <Col key={exercise.number}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{exercise.name}</Card.Title>
                      <Card.Text>
                        <Link onClick={() => selectExercise(exercise.number)} to="gamescreen"><i className="material-icons">play_arrow</i></Link>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}

            </Row>

          )}

      </Stack>
    </div>
  );
}

export default ExercisesScreen;
