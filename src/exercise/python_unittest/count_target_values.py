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
    print('The target was found this often: ' + str(count))

class myTests(unittest.TestCase):
    @patch('builtins.input',side_effect=[[5,3,7,-1,3,7,-5,0]])
    def testOne(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['The target was found this often: 2'],)
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
           ['The target was found this often: 0'],)
    
tests = [myTests().testOne(),myTests().testTwo()]
_test_result = tests[0]
for test in tests:
    if test is not None:
        _test_result = test



{
            "number": ?,
            "name": "NEW: Count target values.\nDifficulty: advanced",
            "baseXmlFile": "/blockly-parsons-prod/exercises/xml/find_longest.xml",
            "unittestFile": "/blockly-parsons-prod/exercises/unittest/find_longest.txt",
            "trys": 0,
            "startZoomLevel": 0.6,
            "text": "<p>One of the common things to do with a list is to <b>count the number</b> of times a <b>target value</b> appears in a list. Write a programm that counts the number of the <b>target value 5</b> in a <b>list you read in</b>.</p><p>For example the program should print out - The target was found this often: 0 - for the list [1, 2, 3] or - The target was found this often: 2 - for the list [5, 4, 5].</p>",
}
            
            
            
            
            You can also count the number of items in a list between a start and end index (inclusive) that are equal to a target value, including the values at both the start and end indices. To do this initialize a count to zero and then loop from the start index to the end index (inclusive). Get the current value at the index. If the current value is equal to the target value increment the count. Return the count."
        }


One of the common things to do with a list is to count the number of times a target value appears in a list. To do this initialize a count to zero and then loop through all the values in the list. If the current value is equal to the target value increment the count. Return the count.
Examples
For example countTargetValues(5, [1, 2, 3]) should return 0 since there are no 5's in the list and countTargetValues(5, [5, 4, 5]) should return 2 since there are two 5's in that list.