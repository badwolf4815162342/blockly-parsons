import unittest
from io import StringIO
from unittest.mock import patch
import sys

def method():
    words = None
    new_word = None
    new_words = None
    word = None
    letter = None
    words = ['Once', 'upon', 'a', 'time', 'in', 'oppositeland']
    new_word = ''
    new_words = []
    for word in words:
        for letter in word:
            new_word = str(new_word) + str(letter)
        new_words.insert(0, word)
    print(','.join(new_words))

class myTests(unittest.TestCase):
    def testOne(self):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['ecnO nopu a emit ni dnaletisoppo '],)

    
_test_result = myTests().testOne()
