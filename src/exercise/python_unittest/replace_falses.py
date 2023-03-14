import unittest
from io import StringIO
from unittest.mock import patch
import sys

def method():
    booleans = None
    index = None
    boolean = None
    def text_prompt(msg):
        try:
            return raw_input(msg)
        except NameError:
            return input(msg)
    booleans = text_prompt('Type in list of booleans.')
    index = 0
    for boolean in booleans:
        if not boolean:
            list2[int(index)] = True
    index = index + 1
    print(booleans)

class myTests(unittest.TestCase):
    @patch('builtins.input',side_effect=[[True,True,False]])
    def testOne(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['[True, True, True]'],)
    @patch('builtins.input',side_effect=[[False,False,False,False,False]])
    def testTwo(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['[True, True, True, True, True]'],)
    
tests = [myTests().testOne(),myTests().testTwo()]
_test_result = tests[0]
for test in tests:
    if test is not None:
        _test_result = test