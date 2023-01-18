/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import '../../../../App.css';
import '../../../../core/customBlocks/custom_Blocks';
import React, { useState } from 'react';
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
  const { movable } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [initialXml, setInitialXml] = useState('');
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

  const xmls = exerciseList.filter((e) => e.number === currentExerciseNumber);
  if (xmls.length === 1) {
    let filename = xmls[0].baseXml;
    if (showOnlyTitle) {
      filename = filename.replace('xml', 'xml_titles');
    }
    console.log(filename);
    fetch(filename)
      .then((r) => r.text())
      .then((xml) => {
        setInitialXml(xml);
        console.log(initialXml);
        setIsLoading(false);
      });
  }

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
      const filtered = codePyArray.filter((line) => (line !== ''));
      setPythonCodeString(filtered.join('\n'));
      setPythonCodeArray(filtered);
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
    console.log(codePy);
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
            movable={movable}
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
  const { movable } = props;
  // eslint-disable-next-line react/prop-types
  const { seed } = props;
  // eslint-disable-next-line react/prop-types
  const { initialXml } = props;
  // eslint-disable-next-line react/prop-types
  const { workspaceDidChange } = props;
  if (movable) {
    return (
      <BlocklyWorkspace
        key={seed}
        className="blockly-workspace"
    // toolboxConfiguration={toolboxCategories} // this must be a JSON toolbox definition
        initialXml={initialXml}
  //  onXmlChange={setSubmittedXml}
        onWorkspaceChange={workspaceDidChange}
        workspaceConfiguration={{
          scrollbars: { horizontal: true, vertical: true },
          zoom:
   {
     controls: true,
     wheel: true,
     startScale: 1.0,
     maxScale: 1.0,
     minScale: 0.8,
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
  return (
    <BlocklyWorkspace
      key={seed}
      className="blockly-workspace"
  // toolboxConfiguration={toolboxCategories} // this must be a JSON toolbox definition
      initialXml={initialXml}
//  onXmlChange={setSubmittedXml}
      onWorkspaceChange={workspaceDidChange}
      workspaceConfiguration={{
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
