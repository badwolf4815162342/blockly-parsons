import {
  Row, Col, Container, Modal, Button, Spinner, Form, Stack,
} from 'react-bootstrap';
import {
  Link,
} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import React, { useState } from 'react';
import ExerciseCard from './Cards/exercisetext.card';
import ShowCodeCard from './Cards/showcode.card';
import useGame from '../../../../core/provider/game/use';
import UnitTestGrader from '../../../../core/utils/unit_test_grader';
import useExercises from '../../../../core/provider/exercises/use';
import HorizontalSpace from '../../../utils/horizontalspace';
import MyBlockly from './myblockly';
import FeedbackCard from './Cards/feedback.card';
import ExerciseStepExplanation from './Cards/exercise.step.explanation.card';
import DraggableModalDialog from '../../../utils/draggableModal';
import VerticalSpace from '../../../utils/verticalspace';
import { nestedCopy, filterInPlace } from '../../../utils/utils';

export default function ExerciseStep() {
  const {
    state: { pythonCodeString, tries },
    actions: { setFeedback, setTries },
  } = useGame();
  const {
    state: { currentExerciseNumber, exerciseList, showInformationModalOnEntry },
    actions: { setExerciseList },
  } = useExercises();

  const [isFeedbackLoading, setFeedbackLoading] = useState(false);
  const [showTippsModal, setShowTippsModal] = React.useState(showInformationModalOnEntry);
  const [showFeedbackModal, setShowFeedbackModal] = React.useState(false);
  console.log(`--XSTL2--${tries}--`);

  const notShowTipps = () => {
    setShowTippsModal(false);
    // console.log('modal_not_show');
  };

  const notShowFeedback = () => {
    setShowFeedbackModal(false);
    // console.log('modal_not_show');
  };

  const closeGame = async () => {
    if (isFeedbackLoading) {
      return;
    }
    setTries(tries + 1);
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
          setFeedbackLoading(false);
        });
    } else {
      console.log('ERROR!!');
    }
  };

  const saveFinalSubmit = async () => {
    console.log(exerciseList);

    // Using Lodash
    const newExerciseList = nestedCopy(exerciseList);

    const exercisesFound = newExerciseList.filter((e) => e.number === currentExerciseNumber);
    if (exercisesFound.length === 1) {
      const currentExercise = {
        number: exercisesFound[0].number,
        name: exercisesFound[0].name,
        baseXml: exercisesFound[0].baseXml,
        unittest: exercisesFound[0].unittest,
        startZoomLevel: exercisesFound[0].startZoomLevel,
        trys: tries,
        text: exercisesFound[0].text,
        done: true,
      };

      filterInPlace(newExerciseList, (e) => e.number !== currentExercise.number);

      newExerciseList.push(currentExercise);
      newExerciseList.sort((a, b) => ((a.number < b.number) ? 1 : -1));

      setExerciseList(newExerciseList);
      console.log(exerciseList);
    } else {
      console.log('ERROR saving submit!!');
    }
  };

  return (
    <div>
      <div className="next-wrapper">
        <Button
          className="next-button-white"
          onClick={() => closeGame()}
        >
          <Stack direction="horizontal">
            <i style={{ fontSize: '20px', fontWeight: '800' }} className="material-icons">arrow_forward</i>
            <h5 style={{ marginBottom: '0px' }}>
              {' '}
              EVALUATE CURRENT SOLUTION (Tries:
              {' '}
              {tries}
              )
            </h5>
          </Stack>

        </Button>
      </div>
      <TippsModal
        show={showTippsModal}
        onHide={notShowTipps}
      />
      <FeedbackModal
        isFeedbackLoading={isFeedbackLoading}
        show={showFeedbackModal}
        onHide={notShowFeedback}
        tries={tries}
        saveFinalSubmit={saveFinalSubmit}
      />
      <Container fluid className="App">
        <Row>

          {/* Right/Upper boxes */}
          <Col xl={{ span: 3, order: 1 }} xxl={{ span: 3, order: 1 }}>
            {/* top on min screens */}
            <MediaQuery maxWidth={1199}>
              <Row>
                <Col xs={12} sm={12}>
                  <HorizontalSpace />
                  <ExerciseCard />
                </Col>
              </Row>
              <HorizontalSpace />
            </MediaQuery>
            {/* right on max screens */}
            <MediaQuery minWidth={1200}>
              <Container>
                <HorizontalSpace />
                <Row>
                  <ExerciseCard />
                </Row>
                <HorizontalSpace />
                <Row>
                  <ShowCodeCard isLoadingGame />
                </Row>
              </Container>
            </MediaQuery>
          </Col>
          {/* Blockly */}
          <Col
            xs={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            md={{ span: 12, order: 2 }}
            lg={{ span: 12, order: 2 }}
            xl={{ span: 9, order: 1 }}
            xxl={{ span: 9, order: 1 }}
          >
            <Row style={{ marginLeft: '5px', marginRight: '5px', paddingLeft: '0px' }}>
              <HorizontalSpace />
              <MyBlockly
                readOnly={false}
                showOnlyTitle={false}
                resetButton
                setModalShow={setShowTippsModal}
              />
            </Row>
          </Col>
        </Row>
        {/* Lower code box for min screens */}
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
      size="m"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogAs={DraggableModalDialog}
    >
      <Modal.Header className="justify-content-end">
        <Container fluid>
          <Stack direction="horizontal">
            <i style={{ fontSize: '30px' }} className="material-icons white-text">info_outline</i>
            <VerticalSpace />
            <h1 className="me-auto">What to do?</h1>
            <Button variant="closebtn" onClick={onHide}><i className="material-icons white-text">close</i></Button>
          </Stack>
        </Container>
      </Modal.Header>
      <Modal.Body>
        <ExerciseStepExplanation />
        <HorizontalSpace />
        <h4>Tips:</h4>
        <img src={`${process.env.PUBLIC_URL}/tips2.png`} alt="Tipps" width="600" className="img-fluid" />
      </Modal.Body>
      <Modal.Footer>
        <Form>
          <Form.Check
            id="showInformationModal"
            defaultChecked={!showInformationModalOnEntry}
            onChange={() => setShowInformationModalOnEntry(!showInformationModalOnEntry)}
            label="Don't show these tips again."
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
  const { tries } = props;
  // eslint-disable-next-line react/prop-types
  const { saveFinalSubmit } = props;
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
      className="modal-content-blue"
    >
      <Modal.Header className="justify-content-end">
        <Container fluid>
          <Stack direction="horizontal">
            <h1 className="me-auto">Feedback</h1>
            <Button variant="closebtn" onClick={onHide}><i className="material-icons white-text">close</i></Button>
          </Stack>
        </Container>
      </Modal.Header>
      {isFeedbackLoading ? <div className="spinner"><Spinner animation="grow" /></div>
        : (
          <div>
            <Modal.Body>
              <FeedbackCard />
            </Modal.Body>
            <Modal.Footer>
              <Container fluid>
                <Stack direction="horizontal">
                  <div className="me-auto">
                    Tries:
                    {tries}
                  </div>
                  <div>
                    {(feedback.success === false)
                      ? (<Button variant="outline-warning" onClick={onHide}>Continue</Button>)
                      : (
                        <Button className="next-button" onClick={saveFinalSubmit}>
                          <Link className="nav-link" to="/">
                            <div>
                              Mark as Complete
                              <i className="material-icons white-text">done_outline</i>
                            </div>
                          </Link>
                        </Button>
                      )}
                  </div>
                </Stack>
              </Container>
            </Modal.Footer>
          </div>
        )}
    </Modal>
  );
}
