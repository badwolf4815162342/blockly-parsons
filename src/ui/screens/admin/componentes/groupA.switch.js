import {
  Button,
} from 'react-bootstrap';
import useExercises from '../../../../core/provider/exercises/use';

function IsGroupASwitch() {
  const {
    state: {
      // always False???
      isGroupA,
    },
    actions:
        {
          setReload,
          setIsGroupA,
        },
  } = useExercises();
  return (
    <div>
      <p>
        You are in group
        {' '}
        {isGroupA ? 'A' : 'B'}
      </p>
      <Button
        className="next-button-yellow"
        onClick={() => {
          setReload(true);
          setIsGroupA(!isGroupA);
        }}
      >
        Change to group
        {' '}
        {isGroupA ? 'B' : 'A'}
      </Button>
    </div>
  );
}

export default IsGroupASwitch;
