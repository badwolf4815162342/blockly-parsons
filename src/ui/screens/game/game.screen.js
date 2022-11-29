/* eslint-disable camelcase */
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Spinner from 'react-bootstrap/Spinner';
import MyBlockly from './components/myblockly';
import Feedback from './components/feedback';
import ShowCode from './components/showCode';
import useGame from '../../../core/provider/game/use';
import UnitTestGrader from '../../../core/utils/unit_test_grader';
import useExercises from '../../../core/provider/exercises/use';

function GameScreen() {
  const [isGameMode, setGameMode] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const {
    state: { pythonCodeString },
    actions: { setFeedback },
  } = useGame();
  const {
    state: { currentExerciseNumber, exerciseList },
  } = useExercises();

  const closeGame = async () => {
    if (isLoading) {
      return;
    }
    setLoading(true);
    const result = await UnitTestGrader(
      pythonCodeString,
      exerciseList[currentExerciseNumber].unittest,
      true,
    );
    setFeedback(result);
    setGameMode(false);
    console.log(result);
    setLoading(false);
    console.log(currentExerciseNumber);
  };

  return (
    <div className="App">
      <Stack gap={3} className="game-area">
        <Stack gab={3} direction="horizontal">
          <div className="bg-light border blockly-card">
            <Card>
              <Card.Body>
                {isLoading
                  ? <div className="spinner"><Spinner animation="grow" /></div>
                  : <GameArea gameMode={isGameMode} />}
              </Card.Body>
            </Card>
          </div>
          <div className="bg-light border info-card">
            <Stack direction="vertical">
              <div className="bg-light border">
                <Card>
                  <Card.Body>
                    <Card.Title>Exercise</Card.Title>
                    <Card.Text>
                      {exerciseList[currentExerciseNumber].text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="bg-light border">
                <Card>
                  <Card.Body>
                    {isLoading
                      ? <div className="spinner"><Spinner animation="grow" /></div>
                      : <ShowCode />}
                  </Card.Body>
                </Card>
              </div>
            </Stack>
          </div>
        </Stack>

      </Stack>
      {isGameMode
        && (
          <div className="bg-light border">
            <Button onClick={() => closeGame()}>Submit Solution</Button>
          </div>
        )}
    </div>
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
