import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {
  Card, Row, Col, Container, Button,
} from 'react-bootstrap';
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
                    <Card className={exercise.done ? 'yellow-card' : 'green-card'}>
                      <Card.Body>
                        <Card.Title className="white-text">{exercise.name}</Card.Title>
                        <Card.Text>
                          <Link onClick={() => selectExercise(exercise.number)} to="gamescreen">
                            {exercise.done
                              ? (
                                <div>
                                  <i style={{ fontSize: '30px' }} className="material-icons green-text">play_circle</i>
                                  <hr />
                                </div>
                              )
                              : <i style={{ fontSize: '50px' }} className="material-icons yellow-text">play_circle</i>}
                          </Link>
                          {exercise.done && (
                            <Container fluid>
                              <Stack direction="horizontal">
                                <div>
                                  Finished in
                                  {(exercise.trys === 1)
                                    ? (
                                      <div>
                                        {exercise.trys}
                                        {' '}
                                        try!
                                      </div>
                                    )
                                    : (
                                      <div>
                                        {exercise.trys}
                                        {' '}
                                        tries!
                                      </div>
                                    )}
                                </div>
                                <i style={{ fontSize: '50px' }} className="material-icons green-text">done_outline</i>
                              </Stack>
                            </Container>
                          )}
                        </Card.Text>
                      </Card.Body>
                    </Card>
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
