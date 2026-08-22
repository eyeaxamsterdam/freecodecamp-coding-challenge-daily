"""
Nonogram Validator
Given an array of clue numbers and an array of cells, determine whether the cells satisfy the nonogram clue.

The clue is an array of numbers representing the lengths of consecutive filled cells, in order. For example, a clue of [3, 2] means there should be 3 consecutive filled cells followed by 2 consecutive filled cells, separated by at least one empty cell.
The row is an array of 1s (filled) and 0s (empty).

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/08-07
"""

def is_valid_nonogram(clue, cells):
    pass

import os
import sys
sys.path.append(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
from helpers.run_tests import run_tests

run_tests(is_valid_nonogram, [
    """from unittest import TestCase
TestCase().assertIs(is_valid_nonogram([3, 2], [1, 1, 1, 0, 1, 1]), True)""",
    """from unittest import TestCase
TestCase().assertIs(is_valid_nonogram([3, 2], [0, 1, 1, 1, 1, 1]), False)""",
    """from unittest import TestCase
TestCase().assertIs(is_valid_nonogram([1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1]), False)""",
    """from unittest import TestCase
TestCase().assertIs(is_valid_nonogram([1, 1, 1, 1], [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0]), True)""",
    """from unittest import TestCase
TestCase().assertIs(is_valid_nonogram([3, 2, 3], [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0]), True)""",
    """from unittest import TestCase
TestCase().assertIs(is_valid_nonogram([3, 2, 3], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0]), False)""",
])
