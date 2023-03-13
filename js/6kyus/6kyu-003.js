// A palindrome is a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either forward or reverse direction. Famous examples include "Amore, Roma", "A man, a plan, a canal: Panama" and "No 'x' in 'Nixon'". - wikipedia

// Our goal is to determine whether or not a given string is a valid palindrome or not.

// Like the above examples, here are a few test cases which are also populated:

// "Amore, Roma" => valid
// "A man, a plan, a canal: Panama" => valid
// "No 'x' in 'Nixon'" => valid
// "Abba Zabba, you're my only friend" => invalid
// You can see that they are case insensitive and disregards non alphanumeric characters. In addition to a few predefined tests, your function will also be tested against a random string generator 50 times which are guaranteed to produce valid palindromes.

// Notes:

// The empty string "" can be read forward or backward the same, it's a palindrome in our case.

function palindrome(string) {
    // TODO
    //lower case everything
    //sanitize the string to only include letters
    //get it into an array of only the letters
    //reverse the array and see if its the same as forwards
    let lowerString = string.toLowerCase()
    let strArr = string.split('')
    console.log(strArr)
    let filteredArr = strArr.filter((char) => {
        return char.toUpperCase() != char.toLowerCase() 
    })
    console.log(filteredArr)
    let answer = filteredArr.join('').toLowerCase()
    let reversedAnswer = filteredArr.reverse().join('').toLowerCase()
    console.log(answer)
    console.log(reversedAnswer)
    console.log(typeof parseInt('9') === 'number')
    if(typeof parseInt(answer) === 'number'){
        return false
    }else{
        return answer === reversedAnswer ? true : false
    }
    
    
  }

console.log(palindrome("A man, a plan, a canal: Panama"))
console.log(palindrome('911'))