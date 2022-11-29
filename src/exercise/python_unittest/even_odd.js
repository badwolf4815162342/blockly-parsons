/* eslint-disable camelcase */
const even_odd_unittest = `import unittest
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
           ['Number is odd.'],)

    
_test_result = myTests().testOne()
`;

export default even_odd_unittest;
