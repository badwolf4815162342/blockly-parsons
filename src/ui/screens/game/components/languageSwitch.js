import Form from 'react-bootstrap/Form';
import useGame from '../../../../core/provider/game/use';

function LanguageSwitch() {
  const {
    state: {
      pythonNotJS,
    }, actions:
        {
          setPythonNotJS,
        },
  } = useGame();

  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Translate to Python (otherwise JS)"
        defaultChecked={pythonNotJS}
        onChange={() => setPythonNotJS(!pythonNotJS)}
      />
    </Form>
  );
}

export default LanguageSwitch;
