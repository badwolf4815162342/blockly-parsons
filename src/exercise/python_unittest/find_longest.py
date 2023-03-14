
import unittest
from io import StringIO
from unittest.mock import patch
import sys

def method():
    numbers = None
    target = None
    maxLen = None
    lenCount = None
    num = None
    def text_prompt(msg):
        try:
            return raw_input(msg)
        except NameError:
            return input(msg)
    numbers = text_prompt('Type in the list with numbers, start, end.')
    target = 10
    maxLen = 0
    lenCount = 0
    for num in numbers:
        if num == target:
            lenCount = lenCount + 1
            if lenCount > maxLen:
                maxLen = lenCount
        else:
            lenCount = 0
    print('Length = ' + str(maxLen))

class myTests(unittest.TestCase):
    @patch('builtins.input',side_effect=[[7, 10, 10, 15, 15, 15, 15, 10, 10, 10, 15, 10]])
    def testOne(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['Length = 3'],)
    @patch('builtins.input',side_effect=[[0,-1,-5,200,-4,-4,-7,20]])
    def testTwo(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['Length = 0'],)
    
tests = [myTests().testOne(),myTests().testTwo()]
_test_result = tests[0]
for test in tests:
    if test is not None:
        _test_result = test