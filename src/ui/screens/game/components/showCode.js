import Stack from 'react-bootstrap/Stack';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import useGame from '../../../../core/provider/game/use';
import LanguageSwitch from './languageSwitch';

function ShowCode() {
  const { state: { javascriptCodeString, pythonCodeString, pythonNotJS } } = useGame();

  return (
    <Stack>
      {' '}
      <div><LanguageSwitch /></div>
      <div>
        <pre id="highlighting" aria-hidden="true" style={{ height: '500px', width: '350px' }}>
          <SyntaxHighlighter showLineNumbers="true" language="python" style={docco}>
            {pythonNotJS ? pythonCodeString : javascriptCodeString}
          </SyntaxHighlighter>
        </pre>

      </div>
    </Stack>

  );
}

export default ShowCode;
