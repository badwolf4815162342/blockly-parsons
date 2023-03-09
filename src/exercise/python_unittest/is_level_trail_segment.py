import unittest
from io import StringIO
from unittest.mock import patch
import sys

def method():
    numbers = None
    i = None
    max2 = None
    start = None
    end = None
    min2 = None
    value = None
    def text_prompt(msg):
        try:
            return raw_input(msg)
        except NameError:
            return input(msg)
    def upRange(start, stop, step):
        while start <= stop:
            yield start
            start += abs(step)
    def downRange(start, stop, step):
        while start >= stop:
            yield start
            start -= abs(step)
    numbers = text_prompt('Type in a lis of numbers.')
    max2 = numbers[int(start - 1)]
    start = 3
    end = 7
    min2 = numbers[int(start - 1)]
    for i in (start <= end) and upRange(start, end, 1) or downRange(start, end, 1):
        value = numbers[int(i - 1)]
        if value > max2:
            max2 = value
        if value < min2:
            min2 = value
    print(max2 + min2 <= 10)

class myTests(unittest.TestCase):
    @patch('builtins.input',side_effect=[[5,3,7,2,7,-5,0]])
    def testOne(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['True'],)
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
           ['False'],)
    
tests = [myTests().testOne(),myTests().testTwo()]
_test_result = tests[0]
for test in tests:
    if test is not None:
        _test_result = test