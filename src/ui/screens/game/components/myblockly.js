/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import '../../../../App.css';
import '../../../../core/customBlocks/custom_Blocks';
import React, { useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { pythonGenerator } from 'blockly/python';
import useGame from '../../../../core/provider/game/use';
import useExercises from '../../../../core/provider/exercises/use';

export default function MyBlockly() {
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

  console.log(exerciseList[0].baseXml);
  const initialXml = exerciseList[currentExerciseNumber].baseXml;

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
      setJavascriptCodeString(filtered.join('\n'));
      setJavascriptCodeArray(filtered);
    }
    setSubmittedXml(workspace);
    console.log(codePy);
  }

  return (
    <div>
      {' '}
      <div className="wrapper">
        <a onClick={reset} href="#">
          🔄
          <i className="fa fa-plus" />
        </a>
      </div>
      <BlocklyWorkspace
        key={seed}
        className="blockly-workspace"
      // toolboxConfiguration={toolboxCategories} // this must be a JSON toolbox definition
        initialXml={initialXml}
    //  onXmlChange={setSubmittedXml}
        onWorkspaceChange={workspaceDidChange}
        workspaceConfiguration={{
          scrollbars: false,
          grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true,
          },
        }}
      />
    </div>

  );
}