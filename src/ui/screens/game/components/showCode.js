import Stack from 'react-bootstrap/Stack';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import useGame from '../../../../core/provider/game/use';
import LanguageSwitch from './languageSwitch';

function ShowCode() {
  const { state: { javascriptCodeString, pythonCodeString, pythonNotJS } } = useGame();

  return (
    <Stack className="dark-text">
      {' '}
      <div className="dark-text"><LanguageSwitch /></div>
      <div className="dark-text">
        <pre id="highlighting" aria-hidden="true" className="dark-text">
          <SyntaxHighlighter customStyle={{ color: 'black' }} className="dark-text" showLineNumbers="true" language="python" style={docco}>
            {pythonNotJS ? pythonCodeString : javascriptCodeString}
          </SyntaxHighlighter>
        </pre>

      </div>
    </Stack>

  );
}

export default ShowCode;
