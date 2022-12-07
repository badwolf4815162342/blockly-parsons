/* eslint-disable camelcase */
import React, { useState } from 'react';
import {
  Spinner, Modal, Button, Card, Row, Col, Container, Stack,
} from 'react-bootstrap';
import parse from 'html-react-parser';
import MediaQuery from 'react-responsive';
import MyBlockly from './components/myblockly';
import Feedback from './components/feedback';
import ShowCode from './components/showCode';
import useGame from '../../../core/provider/game/use';
import UnitTestGrader from '../../../core/utils/unit_test_grader';
import useExercises from '../../../core/provider/exercises/use';

function GameScreen() {
  const [isGameMode, setGameMode] = useState(true);
  const [isLoadingGame, setLoadingGame] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const {
    state: { pythonCodeString },
    actions: { setFeedback },
  } = useGame();
  const {
    state: { currentExerciseNumber, exerciseList },
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

  const showTipps = () => {
    setModalShow(true);
    console.log('modal_show');
  };

  const notShowTipps = () => {
    setModalShow(false);
    console.log('modal_not_show');
  };

  return (
    <>
      <Modalcenter
        show={modalShow}
        onHide={notShowTipps}
      />
      <Container fluid className="App">
        <Row>
          <Col
            xs={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            md={{ span: 12, order: 2 }}
            lg={{ span: 12, order: 2 }}
            xl={{ span: 8, order: 1 }}
            xxl={{ span: 8, order: 1 }}
          >
            <Row>
              <Container>
                <GameArea gameMode={isGameMode} isLoadingGame={isLoadingGame} />
              </Container>
            </Row>

          </Col>
          <Col xl={{ span: 4, order: 1 }} xxl={{ span: 4, order: 1 }}>
            <MediaQuery maxWidth={1200}>
              <Row>
                <Col xs={8} sm={9}>
                  <ExerciseCard />
                </Col>
                <Col xs={4} sm={3}>
                  <Container>
                    <ButtonCard
                      gameMode={isGameMode}
                      tryAgain={tryAgain}
                      closeGame={closeGame}
                      showTipps={showTipps}
                    />

                  </Container>
                </Col>
              </Row>
              <div
                style={{
                  height: '10px',
                }}
              />
            </MediaQuery>
            <MediaQuery minWidth={1201}>
              <Container>
                <Row>
                  <ExerciseCard />
                </Row>
                <div
                  style={{
                    height: '10px',
                  }}
                />
                <Row>
                  <ShowCodeCard isLoadingGame={isLoadingGame} />
                </Row>
                <div
                  style={{
                    height: '10px',
                  }}
                />
                <Row>
                  {' '}
                  <ButtonCard
                    gameMode={isGameMode}
                    tryAgain={tryAgain}
                    closeGame={closeGame}
                    showTipps={showTipps}
                  />
                </Row>
              </Container>
            </MediaQuery>
          </Col>
        </Row>
        <MediaQuery maxWidth={1200}>
          <Row><ShowCodeCard isLoadingGame={isLoadingGame} /></Row>
        </MediaQuery>
      </Container>
    </>
  );
}

function GameArea(props) {
  // eslint-disable-next-line react/prop-types
  const { gameMode } = props;
  // eslint-disable-next-line react/prop-types
  const { isLoadingGame } = props;
  if (gameMode) {
    return (
      <Card>
        <Card.Body>
          {isLoadingGame
            ? <div className="spinner"><Spinner animation="grow" /></div>
            : <MyBlockly />}
        </Card.Body>
      </Card>
    );
  } return (
    <Card>
      <Card.Body>
        {isLoadingGame
          ? <div className="spinner"><Spinner animation="grow" /></div>
          : <Feedback />}
      </Card.Body>
    </Card>
  );
}

function ButtonCard(props) {
  // eslint-disable-next-line react/prop-types
  const { gameMode } = props;
  // eslint-disable-next-line react/prop-types
  const { closeGame } = props;
  // eslint-disable-next-line react/prop-types
  const { tryAgain } = props;
  // eslint-disable-next-line react/prop-types
  const { showTipps } = props;
  if (gameMode) {
    return (
      <Card
        className="text-end border-0"
      >
        <Card.Body>
          <Stack direction="row" spacing={2}>
            <Button variant="outline-warning" onClick={() => showTipps()}>Tipps</Button>
            <div
              style={{
                height: '10px',
              }}
            />
            <Button onClick={() => closeGame()}>Submit Solution</Button>
          </Stack>
        </Card.Body>
      </Card>
    );
  }
  return (
    <Card className="text-end border-0">
      <Card.Body>
        <Button variant="outline-warning" onClick={() => tryAgain()}>Try again</Button>
      </Card.Body>
    </Card>
  );
}

function ShowCodeCard(props) {
  // eslint-disable-next-line react/prop-types
  const { isLoadingGame } = props;
  return (
    <Card>
      <Card.Body>
        {isLoadingGame
          ? <div className="spinner"><Spinner animation="grow" /></div>
          : <ShowCode />}
      </Card.Body>
    </Card>
  );
}

function ExerciseCard() {
  const {
    state: { isLoading, exerciseList, currentExerciseNumber },
  } = useExercises();
  return (
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
  );
}

function Modalcenter(props) {
  // eslint-disable-next-line react/prop-types
  const { onHide } = props;
  // eslint-disable-next-line react/prop-types
  const { show } = props;
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="justify-content-end">
        <Button variant="outline-warning" onClick={onHide}>X</Button>
      </Modal.Header>
      <Modal.Body>
        <img src={`${process.env.PUBLIC_URL}/Tipps.png`} alt="Tipps" width="1080" className="img-fluid" />
      </Modal.Body>

    </Modal>
  );
}

export default GameScreen;
