import {
  Row, Col, Container, Modal, Button, Spinner, Form,
} from 'react-bootstrap';
import {
  Link,
} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import React, { useState } from 'react';
import ButtonCard from './Cards/button.card';
import ExerciseCard from './Cards/exercisetext.card';
import ShowCodeCard from './Cards/showcode.card';
import useGame from '../../../../core/provider/game/use';
import UnitTestGrader from '../../../../core/utils/unit_test_grader';
import useExercises from '../../../../core/provider/exercises/use';
import HorizontalSpace from '../../../utils/horizontalspace';
import MyBlockly from './myblockly';
import FeedbackCard from './Cards/feedback.card';
import ExerciseStepExplanationCard from './Cards/exercise.step.explanation.card';
import DraggableModalDialog from '../../../utils/draggableModal';

export default function ExerciseStep() {
  const {
    state: { pythonCodeString },
    actions: { setFeedback },
  } = useGame();
  const {
    state: { currentExerciseNumber, exerciseList, showInformationModalOnEntry },
  } = useExercises();

  const [isGameMode, setGameMode] = useState(true);
  const [isFeedbackLoading, setFeedbackLoading] = useState(false);
  const [showTippsModal, setShowTippsModal] = React.useState(showInformationModalOnEntry);
  const [showFeedbackModal, setShowFeedbackModal] = React.useState(false);

  const notShowTipps = () => {
    setShowTippsModal(false);
    console.log('modal_not_show');
  };

  const notShowFeedback = () => {
    setGameMode(true);
    setShowFeedbackModal(false);
    console.log('modal_not_show');
  };

  const closeGame = async () => {
    if (isFeedbackLoading) {
      return;
    }
    setFeedbackLoading(true);
    setShowFeedbackModal(true);
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
          setFeedbackLoading(false);
        });
    }
  };

  return (
    <div>
      <TippsModal
        show={showTippsModal}
        onHide={notShowTipps}
      />
      <FeedbackModal
        isFeedbackLoading={isFeedbackLoading}
        show={showFeedbackModal}
        onHide={notShowFeedback}
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
                <MyBlockly
                  movable
                  showOnlyTitle={false}
                  resetButton
                  setModalShow={setShowTippsModal}
                />
              </Container>
            </Row>
          </Col>
          <Col xl={{ span: 4, order: 1 }} xxl={{ span: 4, order: 1 }}>
            <MediaQuery maxWidth={1199}>
              <Row>
                <Col xs={3} sm={3}>
                  <ExerciseStepExplanationCard />
                </Col>
                <Col xs={7} sm={6}>
                  <ExerciseCard />
                </Col>
                <Col xs={2} sm={3}>
                  <Container>
                    <ButtonCard
                      gameMode={isGameMode}
                      closeGame={closeGame}
                    />

                  </Container>
                </Col>
              </Row>
              <HorizontalSpace />

            </MediaQuery>
            <MediaQuery minWidth={1200}>
              <Container>
                <Row>
                  <ExerciseStepExplanationCard />
                </Row>
                <HorizontalSpace />
                <Row>
                  <ExerciseCard />
                </Row>
                <HorizontalSpace />
                <Row>
                  <ShowCodeCard isLoadingGame />
                </Row>
                <HorizontalSpace />
                <Row>
                  {' '}
                  <ButtonCard
                    gameMode={isGameMode}
                    closeGame={closeGame}
                  />
                </Row>
              </Container>
            </MediaQuery>
          </Col>
        </Row>
        <MediaQuery maxWidth={1199}>
          <Row>
            <HorizontalSpace />
            <Container>
              <Col>
                <ShowCodeCard isLoadingGame />
              </Col>
            </Container>
          </Row>
        </MediaQuery>
      </Container>
    </div>
  );
}

function TippsModal(props) {
  const {
    state: { showInformationModalOnEntry }, actions: { setShowInformationModalOnEntry },
  } = useExercises();
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
      dialogAs={DraggableModalDialog}
    >
      <Modal.Header className="justify-content-end">
        <Button variant="closebtn" onClick={onHide}><i className="material-icons">close</i></Button>
      </Modal.Header>
      <Modal.Body>
        <img src={`${process.env.PUBLIC_URL}/Tipps.png`} alt="Tipps" width="1080" className="img-fluid" />
      </Modal.Body>
      <Modal.Footer>
        <Form>
          <Form.Check
            id="showInformationModal"
            defaultChecked={!showInformationModalOnEntry}
            onChange={() => setShowInformationModalOnEntry(!showInformationModalOnEntry)}
            label="Stop automatically showing this on step 3 entry."
          />
        </Form>
      </Modal.Footer>
    </Modal>
  );
}

function FeedbackModal(props) {
  // eslint-disable-next-line react/prop-types
  const { onHide } = props;
  // eslint-disable-next-line react/prop-types
  const { show } = props;
  // eslint-disable-next-line react/prop-types
  const { isFeedbackLoading } = props;
  const { state: { feedback } } = useGame();

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogAs={DraggableModalDialog}
    >
      <Modal.Header className="justify-content-end">
        <Button variant="closebtn" onClick={onHide}><i className="material-icons">close</i></Button>
      </Modal.Header>
      {isFeedbackLoading ? <div className="spinner"><Spinner animation="grow" /></div>
        : (
          <div>
            <Modal.Body>
              <FeedbackCard />
            </Modal.Body>
            <Modal.Footer>
              {(feedback.success === false)
                ? (<Button variant="outline-warning" onClick={onHide}>Try again</Button>)
                : (<Button variant="outline-danger"><Link className="nav-link" to="/">More Exercises</Link></Button>)}
            </Modal.Footer>
          </div>
        )}
    </Modal>
  );
}
