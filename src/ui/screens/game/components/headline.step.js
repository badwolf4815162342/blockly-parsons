import {
  Row, Col, Container, Spinner,
} from 'react-bootstrap';
import MediaQuery from 'react-responsive';
import React from 'react';
import ExerciseCard from './Cards/exercisetext.card';
import useExercises from '../../../../core/provider/exercises/use';
import MyBlockly from './myblockly';
import HorizontalSpace from '../../../utils/horizontalspace';

export default function HeadlineStep() {
  const {
    state: { isLoading, currentExerciseNumber, exerciseList },
  } = useExercises();

  return (
    <Container className="step-container">
      <Row>
        <Col
          xs={{ span: 12, order: 2 }}
          sm={{ span: 12, order: 2 }}
          md={{ span: 12, order: 2 }}
          lg={{ span: 12, order: 2 }}
          xl={{ span: 9, order: 1 }}
          xxl={{ span: 9, order: 1 }}
        >
          <Row>
            <Container>
              <MyBlockly showOnlyTitle resetButton={false} />
            </Container>
          </Row>

        </Col>
        <Col xl={{ span: 3, order: 1 }} xxl={{ span: 3, order: 1 }}>
          <MediaQuery maxWidth={1200}>
            <Container>

              <Row>
                {(isLoading) ? <div className="spinner"><Spinner animation="grow" /></div>
                  : (
                    <Container>
                      <h1>
                        {exerciseList[currentExerciseNumber].name}
                      </h1>
                      <p>
                        Here are some patterns you might need for your final program ...
                        Did you break down the problem in similar pieces? Go to the next step to
                        start with the final puzzle.
                      </p>
                    </Container>
                  )}
              </Row>
              <HorizontalSpace />
              <Row>
                <ExerciseCard />
              </Row>
            </Container>
            <HorizontalSpace />
          </MediaQuery>
          <MediaQuery minWidth={1201}>
            <Container>
              <Row>
                {(isLoading) ? <div className="spinner"><Spinner animation="grow" /></div>
                  : (
                    <Container>
                      <h1>
                        {exerciseList[currentExerciseNumber].name}
                      </h1>
                      <p>
                        Here are some problem snippets you might need for your final program ...
                        Did you break down the problem in similar pieces? Go to the next step to
                        start with the final puzzle.
                      </p>
                    </Container>
                  )}
              </Row>
              <HorizontalSpace />
              <Row>
                <ExerciseCard />
              </Row>

            </Container>
          </MediaQuery>
        </Col>
      </Row>
    </Container>
  );
}
