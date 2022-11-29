import unittest
from io import StringIO
import sys

def method():
  num_to_guess = None
  counter = None
  guess_list = None
  guess = None
  num_to_guess = 7
  counter = 1
  guess_list = [4, 9, -1]
  guess = guess_list[int(counter - 1)]
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
        #self.assertEqual(outputArray[0],'Number is odd.')
        #self.assertEqual(outputArray[1],'This is the current max.')
        #self.assertEqual(outputArray[2],'Number is even')
        #self.assertEqual(outputArray[3],'Number is even')
        #self.assertEqual(outputArray[4],'This is the current max.')
        self.assertEqual(outputArray,
           ['Too low ...', 'Too high ...', ''],)

    
_test_result = myTests().testOne()
