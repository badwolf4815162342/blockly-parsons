/* eslint-disable */

function unittest_error(errormsg) {
  return `<span class='msg'>Error in parsing/executing your program</span><br/> <span class='errormsg'>${errormsg}</span>`;
}
function unittest_output_assertion(expected, actual) {
  return `Expected output: <span class='expected output'>${expected}</span>`
    + `Output of your program: <span class='actual output'>${actual}</span>`;
}
function unittest_assertion(expected, actual) {
  return `Expected value: <span class='expected'>${expected}</span><br>`
    + `Actual value: <span class='actual'>${actual}</span>`;
}

function reduceLineNumbers(input) {
  var id = "fisher[27].man";

  var text = input;
  text = text.replace(/line (\d+),/g, function (match, number) {
    const newNumber = (parseInt(number) - 7)
    return 'line ' + newNumber + ',';
  });
  return text;
}

// do the grading
export default async function UnitTestGrader(studentCodeString, unitTestCode, intendation) {
  let success = true;
  const unittests = unitTestCode;
  let studentCode = studentCodeString;
  let feedbackHtml = ''; // HTML to be returned as feedback
  let result;


  // if there is code to add before student code, add it
  const newexecutableinner = `\n  ` + studentCode.split('\n').join('\n  ');
  const executableCode = unittests.replace('{parsons_puzzle}', newexecutableinner);


  let pyodide = await loadPyodide();
  // Pyodide is now ready to use...

  try {
    pyodide.runPython(executableCode);
    result = pyodide.globals.get('_test_result');
  } catch (e) {
    success = false
    result = reduceLineNumbers(e.toString());
  }

  return { success: success, result: result };
}
