import unittest
from unittest.mock import patch
from io import StringIO
import sys

def method():
  max2 = None
  num = None
  def text_prompt(msg):
    try:
      return raw_input(msg)
    except NameError:
      return input(msg)
  max2 = 0
  num = float(text_prompt('Type first number:'))
  while not num < 0:
    # print(num)
    if num % 2 == 0:
      print('Number is even.')
    else:
      print('Number is odd.')
    if num >= max2:
      print('This is the current max.')
      max2 = num
    num = float(text_prompt('Type next number:'))

class myTests(unittest.TestCase):
    @patch('builtins.input',side_effect=['4','9','2','-1'])
    def testOne(self, input):
        capturedOutput = StringIO()          # Create StringIO object
        sys.stdout = capturedOutput                   #  and redirect stdout.
        method()                                  # Call unchanged function.
        sys.stdout = sys.__stdout__                   # Reset redirect.
        outputArray = capturedOutput.getvalue().split('\n')
        if (len(outputArray)>1):
            outputArray.pop()
        self.assertEqual(outputArray,
           ['Number is even.','This is the current max.','Number is odd.','This is the current max.','Number is even.'],)

    
_test_result = myTests().testOne()
