// add whatever parameters you deem necessary
/* Write a function called ***constructNote***, which accepts two strings, a message and some letters. The function should return ***true*** if the message can be built with the letters that you are given; otherwise, it should return ***false***.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.**/


function constructNote(message, letters) {
    let messageCounter = {}
    let letterCounter = {}

    for(let letter of message) {
        if(messageCounter[letter]) {
            //not ++1
            ++messageCounter[letter]
        } else {
            messageCounter[letter] = 1
        }
    }

    for(let letter of letters) {
        if(letterCounter[letter]) {
            //not ++1
            ++letterCounter[letter]
        } else {
            letterCounter[letter] = 1
        }
    }

    for(let letter in messageCounter) {
        if(!letterCounter[letter]) {
            return false;
        }
        if(messageCounter[letter] > letterCounter[letter]) {
            return false;
        }
    }
    return true

}


constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true