/* eslint-disable camelcase */
const find_max_and_even_odd_unittest = `
import unittest
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
        #self.assertEqual(outputArray[0],'Number is odd.')
        #self.assertEqual(outputArray[1],'This is the current max.')
        #self.assertEqual(outputArray[2],'Number is even')
        #self.assertEqual(outputArray[3],'Number is even')
        #self.assertEqual(outputArray[4],'This is the current max.')
        self.assertEqual(outputArray[:-1],
        ['Number is odd.','This is the current max.','Number is even','Number is even','This is the current max.'],)
        return 'success'


_test_result = myTests().testOne()`;

export default find_max_and_even_odd_unittest;
