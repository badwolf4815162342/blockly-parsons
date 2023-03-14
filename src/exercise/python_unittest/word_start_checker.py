import unittest
from io import StringIO
from unittest.mock import patch
import sys

def method():
    numbers = None
    count = None
    target = None
    num = None
    def text_prompt(msg):
        try:
            return raw_input(msg)
        except NameError:
            return input(msg)
    numbers = text_prompt('Type in a list of numbers.')
    count = 0
    target = 3
    for num in numbers:
        if num == target:
            count = count + 1
    print('')

class myTests(unittest.TestCase):
    @patch('builtins.input',side_effect=[['Speed','Supper','Susanne']])
    def testOne(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['All words start with an \'S\'.'],)
    @patch('builtins.input',side_effect=[['Special','Sand','Sun','Moon']])
    def testTwo(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['Some words start with other letters than \'S\'.'],)
    
tests = [myTests().testOne(),myTests().testTwo()]
_test_result = tests[0]
for test in tests:
    if test is not None:
        _test_result = test