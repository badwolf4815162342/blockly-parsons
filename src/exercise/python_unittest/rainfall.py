import unittest
from io import StringIO
from unittest.mock import patch
import sys

def method():
    day = None
    sum_rain = None
    rain = None
    count = None
    avg = None
    def text_prompt(msg):
        try:
            return raw_input(msg)
        except NameError:
            return input(msg)
    sum_rain = 0
    rain = text_prompt('Type in a list of numbers.')
    count = 0
    for day in rain:
        if day > 0:
            count = count + 1
            sum_rain = sum_rain + day
    if count > 0:
        avg = sum_rain / count
        print('Avg =' + str(avg))
    else:
        print('no rain')

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
           ['Avg =5.5'],)
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
           ['no rain'],)
    
tests = [myTests().testOne(),myTests().testTwo()]
_test_result = tests[0]
for test in tests:
    if test is not None:
        _test_result = test