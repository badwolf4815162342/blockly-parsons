/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import '../../../../App.css';
import '../../../../core/customBlocks/custom_Blocks';
import React, { useState, useEffect } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { pythonGenerator } from 'blockly/python';
import {
  Stack, Button, Spinner, Card,
} from 'react-bootstrap';
import useGame from '../../../../core/provider/game/use';
import useExercises from '../../../../core/provider/exercises/use';

export default function MyBlockly(props) {
  // eslint-disable-next-line react/prop-types
  const { showOnlyTitle } = props;
  // eslint-disable-next-line react/prop-types
  const { resetButton } = props;
  // eslint-disable-next-line react/prop-types
  const { setModalShow } = props;
  // eslint-disable-next-line react/prop-types
  const { readOnly } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [initialXml, setInitialXml] = useState('');
  const [startZoomLevel, setStartZoomLevel] = useState(0.7);
  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
  };
  const {
    state: {
      pythonNotJS,
    },
    actions:
    {
      setSubmittedXml,
      setJavascriptCodeString,
      setJavascriptCodeArray,
      setPythonCodeString,
      setPythonCodeArray,
    },
  } = useGame();
  const {
    state: { exerciseList, currentExerciseNumber },
  } = useExercises();

  useEffect(() => {
    const currentExerciseFound = exerciseList.filter((e) => e.number === currentExerciseNumber);
    if (currentExerciseFound.length === 1) {
      let filename = currentExerciseFound[0].baseXml;
      setStartZoomLevel(currentExerciseFound[0].startZoomLevel);
      if (showOnlyTitle) {
        filename = filename.replace('xml', 'xml_titles');
      }
      // console.log(filename);
      fetch(filename)
        .then((r) => r.text())
        .then((xml) => {
          setInitialXml(xml);
          // startZoomLevel = 1.0;// currentExerciseFound[0].startZoomLevel;
          // console.log(initialXml);
          setIsLoading(false);
        });
    }
  }, []);

  function workspaceDidChange(workspace) {
    const codePy = pythonGenerator.workspaceToCode(
      workspace,
    );
    if (codePy === '') {
      setJavascriptCodeString(codePy);
      setPythonCodeString(codePy);
      return;
    }
    if (pythonNotJS) {
      const codePyArray = codePy.split(/\r?\n|\r|\n/g);
      const filteredA = codePyArray.filter((line) => (line !== ''));
      const filteredB = filteredA.filter((line) => (!line.includes('= None')));
      const replaced = [];
      filteredB.forEach((ele) => {
        replaced.push(ele.replace('index - 1', 'index'));
      });
      console.log(typeof replaced);
      setPythonCodeString(replaced.join('\n'));
      setPythonCodeArray(replaced);
    } else {
      const codeJS = javascriptGenerator.workspaceToCode(
        workspace,
      );
      const codeJSArray = codeJS.split(/\r?\n|\r|\n/g);
      codeJSArray.forEach((line) => line.trim());
      const filtered = codeJSArray.filter((line) => (line !== ''));
      setJavascriptCodeString(filtered.join('\n').replace('raw_input', 'input'));
      setJavascriptCodeArray(filtered);
    }
    setSubmittedXml(workspace);
    // console.log(codePy);
  }

  return (
    <Card>
      <Card.Body>
        {resetButton && (
          <div className="wrapper">
            <Stack>
              <Button onClick={setModalShow} variant="alert" className="fa fa-plus">
                <i className="material-icons">info_outline</i>
              </Button>
              <Button onClick={reset} variant="alert" className="fa fa-plus">
                <i className="material-icons">refresh</i>
              </Button>
            </Stack>
          </div>
        )}
        {(isLoading) ? (<div className="spinner"><Spinner animation="grow" /></div>) : (
          <GetWorksPace
            readOnly={readOnly}
            startZoomLevel={startZoomLevel}
            seed={seed}
            initialXml={initialXml}
            workspaceDidChange={workspaceDidChange}
          />
        )}
      </Card.Body>
    </Card>

  );
}

function GetWorksPace(props) {
  // eslint-disable-next-line react/prop-types
  const { startZoomLevel } = props;
  // eslint-disable-next-line react/prop-types
  const { readOnly } = props;
  // eslint-disable-next-line react/prop-types
  const { seed } = props;
  // eslint-disable-next-line react/prop-types
  const { initialXml } = props;
  // eslint-disable-next-line react/prop-types
  const { workspaceDidChange } = props;
  console.log(startZoomLevel);
  return (
    <BlocklyWorkspace
      key={seed}
      className="blockly-workspace"
    // toolboxConfiguration={toolboxCategories} // this must be a JSON toolbox definition
      initialXml={initialXml}
  //  onXmlChange={setSubmittedXml}
      onWorkspaceChange={workspaceDidChange}
      workspaceConfiguration={{
        disable: false,
        readOnly,
        move:
        {
          scrollbars: {
            horizontal: false,
            vertical: true,
          },
          drag: true,
          wheel: true,
        },
        zoom:
   {
     controls: true,
     wheel: true,
     startScale: startZoomLevel,
     maxScale: 1.0,
     minScale: startZoomLevel,
     scaleSpeed: 1.2,
     pinch: true,
   },
        grid: {
          spacing: 20,
          length: 3,
          colour: '#ccc',
          snap: true,
        },
      }}
    />
  );
}
