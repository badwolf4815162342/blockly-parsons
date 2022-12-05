import { useEffect } from 'react';
// import ExercisesScreen from '../exercises/exercises.screen';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExercisesList from './componentes/exercise.list';
import EditExercise from './componentes/edit.exercise';

function Admin() {
  useEffect(() => {
  });

  return (
    <div>
      <h1>Hi Admin!</h1>
      <Container fluid className="App">
        <Row>
          <Col><ExercisesList /></Col>
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
