import Form from 'react-bootstrap/Form';
import useExercises from '../../../../core/provider/exercises/use';

function LockingSwitch() {
  const {
    state: {
      locking,
    },
    actions:
        {
          setLocking,
        },
  } = useExercises();

  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Locking unavailable exercises?"
        defaultChecked={locking}
        onChange={() => setLocking(!locking)}
      />
    </Form>
  );
}

export default LockingSwitch;
