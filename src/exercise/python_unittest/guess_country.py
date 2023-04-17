import unittest
from io import StringIO
from unittest.mock import patch
import sys

def method():
    country = 'New Zealand'
    guess_country = input('Type in what you think is my favorite country.')
    counter = 1
    correct_first_letter = country[0]
    while guess_country != '-' and guess_country != country:
        guess_letter = guess_country[0]
        if correct_first_letter > guess_letter:
            print('The correct country starts with a letter later in alphabet.')
        else:
            print('The correct country starts with a letter earlier in alphabet.')
        guess_country = input('Type in what you think is my favorite country.')
        counter = counter + 1
    if guess_country == country:
        print('Right! I love New Zealand. Number of Tries: ' + str(counter))

class myTests(unittest.TestCase):
    @patch('builtins.input',side_effect=['Irland','Spain','Argentinia','-'])
    def testExit(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['The correct country starts with a letter later in alphabet.', 'The correct country starts with a letter earlier in alphabet.', 'The correct country starts with a letter later in alphabet.'],)

    @patch('builtins.input',side_effect=['Scotland','Australia','New Zealand'])
    def testFound(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['The correct country starts with a letter earlier in alphabet.', 'The correct country starts with a letter later in alphabet.', 'Right! I love New Zealand. Number of Tries: 3'],)
    
tests = [myTests().testExit(),myTests().testFound()]
_test_result = tests[0]
for test in tests:
    if test is not None:
        _test_result = test