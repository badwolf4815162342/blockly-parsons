import unittest
from unittest.mock import patch
from io import StringIO
import sys

def method():
    import math
    from numbers import Number
    def math_isPrime(n):
        # https://en.wikipedia.org/wiki/Primality_test#Naive_methods
        # If n is not a number but a string, try parsing it.
        if not isinstance(n, Number):
            try:
                n = float(n)
            except:
                return False
        if n == 2 or n == 3:
            return True
        # False if n is negative, is 1, or not whole, or if n is divisible by 2 or 3.
        if n <= 1 or n % 1 != 0 or n % 2 == 0 or n % 3 == 0:
            return False
        # Check all the numbers of form 6k +/- 1, up to sqrt(n).
        for x in range(6, int(math.sqrt(n)) + 2, 6):
            if n % (x - 1) == 0 or n % (x + 1) == 0:
                return False
        return True
    num = float(input('Type first number.'))
    min2 = num
    while not num < 0:
        if num <= min2:
            print('This is the current minimum.')
            min2 = num
            if math_isPrime(num):
                print('The minimum is also prime.')
    num = float(input('Type next number.'))

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
           ['This is the current min.','This is the current minimum.','The minimum is also prime.'],)
    
_test_result = myTests().testOne()
