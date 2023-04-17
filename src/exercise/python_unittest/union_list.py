import unittest
from io import StringIO
from unittest.mock import patch
import sys

def method():
    list1 = input('Type in a first list of numbers.')
    list2 = input('Type in a second list of numbers.')
    union_list = []
    for item in list1:
        if item not in union_list:
            union_list.insert(0, item)
    for item in list2:
        if item not in union_list:
            union_list.insert(0, item)
    print(union_list)

class myTests(unittest.TestCase):
    @patch('builtins.input',side_effect=[[5,3,7,-1],[3,7,-5,0]])
    def testOne(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['[0, -5, -1, 7, 3, 5]'],)
    @patch('builtins.input',side_effect=[[0,-1,-5],[2,3,0]])
    def testTwo(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['[3, 2, -5, -1, 0]'],)
    
tests = [myTests().testOne(),myTests().testTwo()]
_test_result = tests[0]
for test in tests:
    if test is not None:
        _test_result = test