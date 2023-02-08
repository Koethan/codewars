// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"
// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

function makeString(s){
    let result = ''
    for(let i = 0; i < s.length; i++){
      if(i === 0){
        result+= s[i]
      }
      if(s[i]=== " "){
        result += s[i+1]
      }
    }
    return result
  }

//   const makeString = s => s.split(' ').map(x => x[0]).join('')
//you split the string on each space so in the new array each element is a separate word. then you map a new array and for each element just return the 0 index of that element, in our case the first letter of each word. then you join all the array elements together with no space and return one string that is made up of all the first letters of each word.