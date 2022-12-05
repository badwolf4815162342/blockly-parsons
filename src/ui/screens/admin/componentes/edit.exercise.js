import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import useExercises from '../../../../core/provider/exercises/use';

function EditExercise() {
  const [name, setName] = useState('');
  const [initialXml, setInitialXml] = useState('');
  const [text, setText] = useState('');
  // const [tries, setTries] = useState(0);
  const [number, setNumber] = useState(0);
  // const [unittest, setUnittest] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  const {
    state: { exerciseList, currentExerciseNumber },
    // actions: { setExerciseList },
  } = useExercises();

  useEffect(() => {
    console.log(`use effect ${currentExerciseNumber}`);
    const xmls = exerciseList.filter((e) => e.number === currentExerciseNumber);
    if (xmls.length === 1) {
      setNumber(xmls[0].number);
      // setUnittest(xmls[0].unittest);
      // setTries(xmls[0].tries);
      setName(xmls[0].name);
      setText(xmls[0].text);
      const filename = xmls[0].baseXml;
      fetch(filename)
        .then((r) => r.text())
        .then((xml) => {
          setInitialXml(xml);
          setIsLoading(false);
        });
    } else {
      setNumber(exerciseList.length);
      setName('');
      setInitialXml('');
      setText('');
      setIsLoading(false);
    }
  }, [currentExerciseNumber]);

  const handleChange = async () => {
    console.log('change');
  };

  const handleSubmit = async () => {
    alert(`An exercise was submitted: ${name}. Saving not possible at the moment`);

    /** const xmlFileContent = initialXml;
    const xmlFileName = initialXml;

    const newExercisesList = exerciseList;
    const currentExercise = {
      number,
      name,
      baseXml: xmlFileName, // 'reader.readAsText(exercise.baseXmlFile)',
      unittest, // 'reader.readAsText(exercise.unittestFile)',
      trys: tries,
      text,
    };
    if (currentExerciseNumber >= newExercisesList.length) {
      console.log('New Exercise');
    } else {
      exerciseList.remove((e) => e.number === currentExerciseNumber);
    }
    newExercisesList.push(currentExercise);
    setExerciseList(newExercisesList); */
  };

  return (
    (isLoading)
      ? <div className="spinner"><Spinner animation="grow" /></div>
      : (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Exercise number
              {' '}
              {number}
              {' '}
              Title
            </Form.Label>
            <Form.Control size="lg" type="text" placeholder={name} onChange={() => handleChange()} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Exercise Text</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder={text} onChange={() => handleChange()} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Copied xml</Form.Label>
            <Form.Control as="textarea" rows={10} placeholder={initialXml} onChange={() => handleChange()} />
          </Form.Group>
          <Button onClick={() => handleSubmit()} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )
  );
}

export default EditExercise;
