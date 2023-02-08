/* eslint-disable camelcase */
const find_max_and_even_odd_unittest = `
import unittest
from io import StringIO
import sys

def method():
{parsons_puzzle}
class myTests(unittest.TestCase):
    @patch('builtins.input',side_effect=['4','9','2','-1'])
    def testOne(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['Number is even.','This is the current max.','Number is odd.','This is the current max.','Number is even.'],)
        return 'success'


_test_result = myTests().testOne()`;

export default find_max_and_even_odd_unittest;
