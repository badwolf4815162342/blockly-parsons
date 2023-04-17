import Stack from 'react-bootstrap/Stack';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import parse from 'html-react-parser';
import useGame from '../../../../core/provider/game/use';
import Success from './success';
import Failure from './failure';
import useExercises from '../../../../core/provider/exercises/use';

function Feedback() {
  const {
    state: { exerciseList, currentExerciseNumber },
  } = useExercises();
  const { state: { feedback } } = useGame();

  function getExercise() {
    const exercise = exerciseList.find((e) => e.number === currentExerciseNumber);
    return exercise;
  }

  if (feedback.success) {
    return <Success />;
  }

  return (
    <Stack>
      <Failure />
      <div className="green-text">
        <h3>These are the results we are testing for:</h3>
        <div>
          {parse(getExercise().testingOutput)}
        </div>
        <br />
        <h3>This is your error stack trace:</h3>
        <SyntaxHighlighter showLineNumbers="true" language="python" style={docco}>
          {feedback.result}
        </SyntaxHighlighter>
      </div>
    </Stack>
  );
}

export default Feedback;
