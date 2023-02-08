import {
  Spinner, Card, Container,
} from 'react-bootstrap';
import React, { useState } from 'react';
import parse from 'html-react-parser';
import Collapse from 'react-bootstrap/Collapse';
import useExercises from '../../../../../core/provider/exercises/use';

export default function ExerciseCard() {
  const {
    state: { isLoading, exerciseList, currentExerciseNumber },
  } = useExercises();
  const [open, setOpen] = useState(true);

  function getExercise() {
    const exercise = exerciseList.find((e) => e.number === currentExerciseNumber);
    return exercise;
  }

  return (
    <Card className="exercise-explanation-card">
      <Card.Body>
        {(isLoading)
          ? <div className="spinner"><Spinner animation="grow" /></div>
          : (
            <div>
              <Card.Title className="white-text">
                <div className="white-text">
                  {parse(getExercise().name)}
                </div>
              </Card.Title>
              <Card.Text>
                <Collapse in={open}>
                  <div id="example-collapse-text">
                    {(isLoading)
                      ? <div className="spinner"><Spinner animation="grow" /></div>
                      : (
                        <div className="white-text">
                          {parse(getExercise().text)}
                        </div>
                      )}

                  </div>
                </Collapse>
                <Container fluid onClick={() => setOpen(!open)}>
                  <div style={{ backgroundColor: 'transparent', borderStyle: 'none', float: 'right' }}>
                    {open
                      ? (
                        <i style={{ fontSize: '30px' }} className="material-icons white-text">arrow_drop_up</i>
                      )
                      : <i style={{ fontSize: '30px' }} className="material-icons white-text">arrow_drop_down</i>}
                  </div>
                </Container>
              </Card.Text>
            </div>
          )}

      </Card.Body>
    </Card>
  );
}
