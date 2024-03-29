import unittest
from io import StringIO
from unittest.mock import patch
import sys

def method():
    numbers = input('Type in a lis of numbers.')
    start = 3
    end = 7
    max2 = numbers[int(start - 1)]
    min2 = numbers[int(start - 1)]
    for index in range(start, end):
        value = numbers[int(index)]
        if value > max2:
            max2 = value
        if value < min2:
            min2 = value
    print(max2 + min2 <= 10)

class myTests(unittest.TestCase):
    @patch('builtins.input',side_effect=[[5,3,7,2,7,-5,0,3,2]])
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