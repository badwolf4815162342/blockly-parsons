import "./../../../../App.css";
import "./../../../../customBlocks/custom_Blocks";
import React, { useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import useGame from "../../../../core/provider/game/use";
import 'blockly/javascript';
import {javascriptGenerator} from 'blockly/javascript';
//import toolboxCategories from "../../../../customBlocks/toolbox";
import blocklibrary from "../../../../customBlocks/blocklibrary";


export default function MyBlockly() {
    const { actions: { setSubmittedXml} } = useGame();

  const [javascriptCode, setJavascriptCode] = useState("");

  const initialXml = blocklibrary

  function workspaceDidChange(workspace) {
    var code = javascriptGenerator.workspaceToCode(
        workspace
      );
    setJavascriptCode(code);
    setSubmittedXml(code);
   console.log(code);
  }

  return (
    <BlocklyWorkspace
      className="blockly-workspace"
     // toolboxConfiguration={toolboxCategories} // this must be a JSON toolbox definition
      initialXml={initialXml}
      onXmlChange={setSubmittedXml}
      onWorkspaceChange={workspaceDidChange}
      workspaceConfiguration={{
        grid: {
          spacing: 20,
          length: 3,
          colour: "#ccc",
          snap: true,
        },
      }}
      />
  );
}