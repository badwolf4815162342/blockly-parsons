import unittest
from io import StringIO
from unittest.mock import patch
import sys

def method():
    list2 = input('Type in the list with numbers, start, end.')
    start = list2[-2]
    end = list2[-1]
    sum2 = 0
    for index in range(start, end+1):
        value = list2[int(index)]
        sum2 = sum2 + value
    length = (end - start) + 1
    if length >= 1:
        avg = sum2 / length
        print('Avg = ' + str(avg))
    else:
        print('No avg.')

class myTests(unittest.TestCase):
    @patch('builtins.input',side_effect=[[5,3,7,1,7,15,30,2,5]])
    def testOne(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['Avg = 7.5'],)
    @patch('builtins.input',side_effect=[[0,-1,-5,9,20,3,7,3]])
    def testTwo(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['No avg.'],)
    
tests = [myTests().testOne(),myTests().testTwo()]
_test_result = tests[0]
for test in tests:
    if test is not None:
        _test_result = test