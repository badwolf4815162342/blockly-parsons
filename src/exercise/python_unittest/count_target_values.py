 def countTargetValues(target, numList):
    count = 0
    for index in range(len(numList)):
        current = numList[index]
        if (current == target):
            count = count + 1
              return count



{
            "number": ?,
            "name": "NEW: Count target values.\nDifficulty: advanced",
            "baseXmlFile": "/blockly-parsons-prod/exercises/xml/find_longest.xml",
            "unittestFile": "/blockly-parsons-prod/exercises/unittest/find_longest.txt",
            "trys": 0,
            "startZoomLevel": 0.6,
            "text": "You can also count the number of items in a list between a start and end index (inclusive) that are equal to a target value, including the values at both the start and end indices. To do this initialize a count to zero and then loop from the start index to the end index (inclusive). Get the current value at the index. If the current value is equal to the target value increment the count. Return the count."
        }


One of the common things to do with a list is to count the number of times a target value appears in a list. To do this initialize a count to zero and then loop through all the values in the list. If the current value is equal to the target value increment the count. Return the count.
Examples
For example countTargetValues(5, [1, 2, 3]) should return 0 since there are no 5's in the list and countTargetValues(5, [5, 4, 5]) should return 2 since there are two 5's in that list.