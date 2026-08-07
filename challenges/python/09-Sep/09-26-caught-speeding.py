"""
Caught Speeding
Given an array of numbers representing the speed at which vehicles were observed traveling, and a number representing the speed limit, return an array with two items, the number of vehicles that were speeding, followed by the average amount beyond the speed limit of those vehicles.

If there were no vehicles speeding, return [0, 0].

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/09-26
"""

def speeding_statistics(speeds, speed_limit):
    over_amounts = [speed - speed_limit for speed in speeds if speed > speed_limit]
    if not over_amounts:
        return [0, 0]
    return [len(over_amounts), sum(over_amounts) / len(over_amounts)]


import os
import sys
sys.path.append(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
from helpers.run_tests import run_tests

run_tests(speeding_statistics, [
    """assert speeding_statistics([50, 60, 55], 60) == [0, 0]""",
    """assert speeding_statistics([58, 50, 60, 55], 55) == [2, 4]""",
    """assert speeding_statistics([61, 81, 74, 88, 65, 71, 68], 70) == [4, 8.5]""",
    """assert speeding_statistics([100, 105, 95, 102], 100) == [2, 3.5]""",
    """assert speeding_statistics([40, 45, 44, 50, 112, 39], 55) == [1, 57]""",
])
