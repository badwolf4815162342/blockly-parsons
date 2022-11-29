import Stack from 'react-bootstrap/Stack';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import useGame from '../../../../core/provider/game/use';
import Success from './success';
import Failure from './failure';

function Feedback() {
  const { state: { feedback } } = useGame();

  if (feedback.success) {
    return <Success />;
  }

  return (
    <Stack>
      <Failure />
      <div>
        <SyntaxHighlighter showLineNumbers="true" language="python" style={docco}>
          {feedback.result}
        </SyntaxHighlighter>
      </div>
    </Stack>
  );
}

export default Feedback;
