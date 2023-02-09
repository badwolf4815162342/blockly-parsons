import {
  Row, Col, Container,
} from 'react-bootstrap';
import MediaQuery from 'react-responsive';
import React from 'react';
import ExerciseCard from './Cards/exercisetext.card';
import HorizontalSpace from '../../../utils/horizontalspace';
import MyBlockly from './myblockly';

export default function HeadlineStep() {
  return (
    <div>
      <Container fluid className="App">
        <Row style={{
        }}
        >
          {/* Right/Upper boxes */}
          <Col xl={{ span: 3, order: 1 }} xxl={{ span: 3, order: 1 }}>
            {/* top on min screens */}
            <HorizontalSpace />
            <MediaQuery maxWidth={1199}>
              <Row>
                <Col xs={5} sm={5}>
                  <Container>
                    <h1 className="white-text">
                      What to do here?
                    </h1>
                    <p className="white-text">
                      Here are some sub-goal names you might need for your final program ...
                      Did you break down the problem in similar pieces? Go to the next step to
                      start with the final puzzle.
                    </p>
                  </Container>
                </Col>
                <Col xs={7} sm={7}>
                  <ExerciseCard />
                </Col>
              </Row>
              <HorizontalSpace />
            </MediaQuery>
            {/* right on max screens */}
            <MediaQuery minWidth={1200}>
              <Container Row>
                <HorizontalSpace />
                <Row>
                  <Container>
                    <h1 className="white-text">
                      What to do here?
                    </h1>
                    <p className="white-text">
                      Here are some sub-goal names you might need for your final program ...
                      Did you break down the problem in similar pieces? Go to the next step to
                      start with the final puzzle.
                    </p>
                  </Container>
                </Row>
                <HorizontalSpace />
                <Row>
                  <ExerciseCard />
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
            <Row style={{ marginLeft: '0px', marginRight: '5px', paddingLeft: '0px' }}>
              <HorizontalSpace />
              <MyBlockly
                readOnly
                showOnlyTitle
                resetButton={false}
                movable={false}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
