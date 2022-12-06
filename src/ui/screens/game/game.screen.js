/* eslint-disable camelcase */
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import parse from 'html-react-parser';
import MyBlockly from './components/myblockly';
import Feedback from './components/feedback';

import ShowCode from './components/showCode';
import useGame from '../../../core/provider/game/use';
import UnitTestGrader from '../../../core/utils/unit_test_grader';
import useExercises from '../../../core/provider/exercises/use';

function GameScreen() {
  const [isGameMode, setGameMode] = useState(true);
  const [isLoadingGame, setLoadingGame] = useState(false);
  const {
    state: { pythonCodeString },
    actions: { setFeedback },
  } = useGame();
  const {
    state: { isLoading, currentExerciseNumber, exerciseList },
  } = useExercises();

  const closeGame = async () => {
    if (isLoadingGame) {
      return;
    }
    setLoadingGame(true);
    const exercisesFound = exerciseList.filter((e) => e.number === currentExerciseNumber);
    if (exercisesFound.length === 1) {
      const filename = exercisesFound[0].unittest;
      fetch(filename)
        .then((r) => r.text())
        .then(async (unittest) => {
          const result = await UnitTestGrader(
            pythonCodeString,
            unittest,
            true,
          );
          setFeedback(result);
          setGameMode(false);
          setLoadingGame(false);
        });
    }
  };

  const tryAgain = async () => {
    setGameMode(true);
  };

  return (
    <Container fluid className="App">
      <Row>
        <Col xs={{ order: 'last' }} sm={{ order: 'last' }} md={{ order: 'last' }} lg={{ order: 'last' }} xl={8} xxl={8}>
          <Row>
            <Container>
              <Card>
                <Card.Body>
                  {isLoadingGame
                    ? <div className="spinner"><Spinner animation="grow" /></div>
                    : <GameArea gameMode={isGameMode} />}
                </Card.Body>
              </Card>
            </Container>
          </Row>
          {isGameMode
        && (
          <Row>
            <Container>
              <Card>
                <Card.Body>
                  <Button onClick={() => closeGame()}>Submit Solution</Button>
                </Card.Body>
              </Card>
            </Container>
          </Row>
        )}
        </Col>
        <Col xl={4} xxl={4}>
          <Container>
            <Row>
              <Card>
                <Card.Body>
                  <Card.Title>Exercise</Card.Title>
                  <Card.Text>
                    {(isLoading)
                      ? <div className="spinner"><Spinner animation="grow" /></div>
                      : (
                        <div>
                          {parse(exerciseList[currentExerciseNumber].text)}
                        </div>
                      )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <Card>
                <Card.Body>
                  {isLoadingGame
                    ? <div className="spinner"><Spinner animation="grow" /></div>
                    : <ShowCode />}
                </Card.Body>
              </Card>
            </Row>
            {isGameMode
              ? <div />
              : (
                <Row>
                  <Card>
                    <Card.Body>
                      <Button variant="outline-warning" onClick={() => tryAgain()}>Try again</Button>
                      {' '}
                    </Card.Body>
                  </Card>
                </Row>
              )}
          </Container>
        </Col>
      </Row>

    </Container>
  );
}

function GameArea(props) {
  // eslint-disable-next-line react/prop-types
  const { gameMode } = props;
  if (gameMode) {
    return <MyBlockly />;
  } return <Feedback />;
}

export default GameScreen;
