// add whatever parameters you deem necessary
/* Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
Examples:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
Constraints
Time Complexity - O(N + M)
**/
function sameFrequency(int1, int2) {
    //capital
    let strint1 = String(int1)
    let strint2 = String(int2)
    let frequencyObject1 = {}
    let frequencyObject2 = {}

    for(let letter of strint1) {
        if(frequencyObject1[letter]) {
            ++frequencyObject1[letter]
        } else {
            frequencyObject1[letter] = 1
        }
    }

    for(let letter of strint2) {
        if(frequencyObject2[letter]) {
            ++frequencyObject2[letter]
        } else {
            frequencyObject2[letter] = 1
        }
    }
    
    for (let key of frequencyObject1) {
        if(frequencyObject1[key] !== (frequencyObject2[key])) {
            return false
        }
    }

    return true
}

    
