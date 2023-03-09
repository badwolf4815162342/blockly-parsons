import unittest
from io import StringIO
from unittest.mock import patch
import sys

def method():
    numbers = None
    sum2 = None
    number = None
    def text_prompt(msg):
        try:
            return raw_input(msg)
        except NameError:
            return input(msg)
    numbers = text_prompt('Type in a list of numbers.')
    sum2 = 0
    for number in numbers:
        if number > 0 and number < 10:
            sum2 = sum2 + number
    print('The sum is ' + str(sum2))

class myTests(unittest.TestCase):
    @patch('builtins.input',side_effect=[[5,3,7,-1,7,-5,0]])
    def testOne(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['The sum is 22'],)
    @patch('builtins.input',side_effect=[[0,-1,-5]])
    def testTwo(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['The sum is 0'],)
    
tests = [myTests().testOne(),myTests().testTwo()]
_test_result = tests[0]
for test in tests:
    if test is not None:
        _test_result = test