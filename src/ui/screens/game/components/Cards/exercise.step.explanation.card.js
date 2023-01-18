import {
  Card,
} from 'react-bootstrap';

export default function ExerciseStepExplanationCard() {
  return (
    <Card className="yellow-step-card">
      <p>
        <b>
          Now all the puzzle pieces you need to solve the problem are laid
          out and grouped by sub-goals here. Try to build the whole program
          by combining all pieces.
        </b>
      </p>
    </Card>
  );
}
