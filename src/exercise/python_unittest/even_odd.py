import unittest
from io import StringIO
import sys

def method():
    input_num = None
    mod = None
    input_num = 5
    mod = input_num / 2
    if mod == 0:
        print('Number is even.')
    else:
        print('Number is odd.')

class myTests(unittest.TestCase):
    def testOne(self):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        self.assertEqual(outputArray,
           ['Number is odd.', ''],)

    
_test_result = myTests().testOne()
