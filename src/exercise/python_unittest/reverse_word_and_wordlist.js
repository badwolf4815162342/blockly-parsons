/* eslint-disable camelcase */
const reverse_word_and_wordlist_unittest = `import unittest
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
           ['oppositeland,in,time,a,upon,Once'],)

    
_test_result = myTests().testOne()
`;

export default reverse_word_and_wordlist_unittest;
