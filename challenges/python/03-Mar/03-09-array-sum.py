"""
Array Sum
Given an array of numbers, return the sum of all the numbers.

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/03-09
"""

def sum_array(numbers):
    pass

import os
import sys
sys.path.append(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
from helpers.run_tests import run_tests

run_tests(sum_array, [
    """from unittest import TestCase
TestCase().assertEqual(sum_array([1, 2, 3, 4, 5]), 15)""",
    """from unittest import TestCase
TestCase().assertEqual(sum_array([42]), 42)""",
    """from unittest import TestCase
TestCase().assertEqual(sum_array([5, -2, 7, -3]), 7)""",
    """from unittest import TestCase
TestCase().assertEqual(sum_array([203, 145, -129, 6293, 523, -919, 845, 2434]), 9395)""",
    """from unittest import TestCase
TestCase().assertEqual(sum_array([0, 0]), 0)""",
])
