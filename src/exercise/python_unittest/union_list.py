import unittest
from io import StringIO
from unittest.mock import patch
import sys

def method():
    list1 = None
    list2 = None
    union_list = None
    item = None
    def text_prompt(msg):
        try:
            return raw_input(msg)
        except NameError:
            return input(msg)
    def first_index(my_list, elem):
        try: index = my_list.index(elem) + 1
        except: index = 0
        return index
    list1 = text_prompt('Type in a first list of numbers.')
    list2 = text_prompt('Type in a second list of numbers.')
    union_list = []
    for item in list1:
        if 0 == first_index(union_list, item):
            union_list.insert(0, item)
    for item in list2:
        if 0 == first_index(union_list, item):
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