import unittest
from io import StringIO
import sys

def method():
    guess_list = None
    num_to_guess = None
    guess = None
    counter = None
    list2 = None
    guess_list = [4, 9, -1]
    num_to_guess = 7
    guess = list2[-1]
    counter = 1
    while guess != -1 and guess != num_to_guess:
        if guess > num_to_guess:
            print('Too high ...')
        else:
            print('Too low ...')
        counter = counter + 1
        guess = guess_list[int(counter - 1)]
    if guess == num_to_guess:
        print('Right! Number of Tries: ' + str(counter))

class myTests(unittest.TestCase):
    def testOne(self):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        print(outputArray)
        self.assertEqual(outputArray,
           ['Number is odd.','This is the current max.','Number is even','Number is even','This is the current max.',''],)

    
_test_result = myTests().testOne()
