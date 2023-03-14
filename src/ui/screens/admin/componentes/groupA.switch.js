import Form from 'react-bootstrap/Form';
import useExercises from '../../../../core/provider/exercises/use';

function IsGroupASwitch() {
  const {
    state: {
      // always False???
      isGroupA,
    },
    actions:
        {
          setIsGroupA,
          setReset,
        },
  } = useExercises();

  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Is the current group group A?"
        defaultChecked={isGroupA}
        onChange={() => {
          setIsGroupA(!isGroupA);
          setReset(true);
        }}
      />
    </Form>
  );
}

export default IsGroupASwitch;
