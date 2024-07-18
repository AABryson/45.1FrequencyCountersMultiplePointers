// add whatever parameters you deem necessary
/* Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
Constraints:
Time Complexity: O(N)
Examples:
averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
**/
function averagePair(array, avg) {
    let n = 0
    let end = array.length - 1
    while(n < end) {
        //check to see if they are equal first
        if(((array[n] + array[end]) / 2) === avg) {
            return true
        } else if (((array[n] + array[end]) / 2 ) > avg) {
            end = end -1
        } else {
                n = n + 1

        }
        
    }
    //place outside the while loop
    return false
}
