import unittest
from io import StringIO
from unittest.mock import patch
import sys

def method():
    numbers = input('Type in a list of numbers.')
    flag = True
    for number in numbers:
        remainder = number % 3
        if not remainder == 0:
            flag = False
    if flag:
        print('All numbers are divisible by 3.')
    else:
        print('Some numbers are not divisible by 3.')

class myTests(unittest.TestCase):
    @patch('builtins.input',side_effect=[[3,27,9]])
    def testOne(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['All numbers are divisible by 3.'],)
    @patch('builtins.input',side_effect=[[4,12,15,3]])
    def testTwo(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['Some numbers are not divisible by 3.'],)
    
tests = [myTests().testOne(),myTests().testTwo()]
_test_result = tests[0]
for test in tests:
    if test is not None:
        _test_result = test