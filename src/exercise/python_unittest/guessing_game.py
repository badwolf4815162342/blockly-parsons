import unittest
from io import StringIO
from unittest.mock import patch
import sys

def method():
    num_to_guess = None
    counter = None
    guess = None
    def text_prompt(msg):
        try:
            return raw_input(msg)
        except NameError:
            return input(msg)
    num_to_guess = 7
    counter = 1
    guess = float(text_prompt('Type in your guess.'))
    while (guess != -1 and guess != num_to_guess):
        if guess > num_to_guess:
            print('Too high ...')
        else:
            print('Too low ...')
        counter = counter + 1
        guess = float(text_prompt('Type in your guess.'))
    if guess == num_to_guess:
        print('Right! Number of Tries: ' + str(counter))

class myTests(unittest.TestCase):
    @patch('builtins.input',side_effect=['4','9','2','-1'])
    def testExit(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['Too low ...', 'Too high ...', 'Too low ...'],)

    @patch('builtins.input',side_effect=['10','3','7'])
    def testFound(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['Too high ...', 'Too low ...', 'Right! Number of Tries: 3'],)
    
tests = [myTests().testExit(),myTests().testFound()]
_test_result = tests[0]
for test in tests:
    if test is not None:
        _test_result = test