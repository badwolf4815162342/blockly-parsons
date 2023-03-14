import { useEffect } from 'react';
// import ExercisesScreen from '../exercises/exercises.screen';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExercisesList from './componentes/exercise.list';
import EditExercise from './componentes/edit.exercise';
import LockingSwitch from './componentes/locking.switch';
import IsGroupASwitch from './componentes/groupA.switch';

function Admin() {
  useEffect(() => {
  });

  return (
    <div className="white-text">
      <h1>Hi Admin!</h1>

      <Container fluid className="App">
        <Row><LockingSwitch /></Row>
        <Row>
          <Col><ExercisesList /></Col>
          <Col><IsGroupASwitch /></Col>
          <Col>
            {' '}
            <EditExercise />
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Admin;
