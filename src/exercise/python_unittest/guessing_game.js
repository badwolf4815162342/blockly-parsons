/* eslint-disable camelcase */
const guessing_game_unittest = `import unittest
from io import StringIO
import sys

def method():
{parsons_puzzle}
class myTests(unittest.TestCase):
    def testOne(self):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\\n')
        self.assertEqual(outputArray[:-1],
           ['Number is odd.','This is the current max.','Number is even','Number is even','This is the current max.'],)

    
_test_result = myTests().testOne()
`;

export default guessing_game_unittest;
