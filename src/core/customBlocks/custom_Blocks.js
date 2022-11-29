import Blockly from 'blockly';
// import 'blockly/python';
import { javascriptGenerator } from 'blockly/javascript';
import { pythonGenerator } from 'blockly/python';

Blockly.Blocks.group_title = {
  init() {
    this.appendValueInput('TEXT')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_CENTRE);
    this.setInputsInline(true);
    this.setColour('E24646');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator.group_title = function (block) {
  // TODO: Assemble JavaScript into code variable.
  console.log(block);
  const code = '';
  return code;
};

pythonGenerator.group_title = function (block) {
  // TODO: Assemble JavaScript into code variable.
  console.log(block);
  const code = '';
  return code;
};

Blockly.Blocks.new_boundary_function = {
  init() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput('Boundary Function Name'), 'Name');
    this.appendStatementInput('Content')
      .setCheck(null);
    this.setInputsInline(true);
    this.setColour(315);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks.return = {
  init() {
    this.appendValueInput('NAME')
      .setCheck(null)
      .appendField('return');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator.return = function (block) {
  const valueCode = javascriptGenerator.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  const code = `return (${valueCode});\n`;
  return code;
};

// infinite_loop: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#qv47eq
Blockly.Blocks.infinite_loop = {
  init() {
    this.appendDummyInput()
      .appendField('infinite loop');
    this.appendStatementInput('LOOPED_CODE')
      .setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator.infinite_loop = function (block) {
  const statementsLoopedCode = javascriptGenerator.statementToCode(block, 'LOOPED_CODE');
  // TODO: Assemble JavaScript into code variable.
  const code = `while (${true}) {\n${statementsLoopedCode}}\n`;
  return code;
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#
Blockly.Blocks.if_a_greater_b = {
  init() {
    this.appendDummyInput()
      .appendField('if a > b:');
    this.appendValueInput('A')
      .setCheck(null)
      .appendField('a');
    this.appendValueInput('B')
      .setCheck(null)
      .appendField('b');
    this.appendStatementInput('THEN')
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascriptGenerator.if_a_greater_b = function (block) {
  const statementsLoopedCode = javascriptGenerator.statementToCode(block, 'THEN');
  const aCode = javascriptGenerator.statementToCode(block, 'THEN');
  const bCode = javascriptGenerator.statementToCode(block, 'THEN');
  // TODO: Assemble JavaScript into code variable.
  const code = `if (${aCode} > ${bCode}) {\n${statementsLoopedCode}}\n`;
  return code;
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#
Blockly.Blocks.read_in_number = {
  init() {
    this.appendDummyInput()
      .appendField('read in number')
      .appendField(new Blockly.FieldNumber(0, 1, 20, 1), 'NUMBER');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('This is an example number you can use as a placeholder for user input, put any number you like for testing.');
    this.setHelpUrl('');
  },
};

javascriptGenerator.read_in_number = function (block) {
  const numberCode = block.getFieldValue('NUMBER');
  // TODO: Assemble JavaScript into code variable.
  const code = `${numberCode};\n`;
  return code;
};
