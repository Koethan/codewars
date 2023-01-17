// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  // want to reverse the string and compare it to the forward string
//   x = x.toLowerCase()
//   let xArr = x.split('')
//   let reversedX = []
//   xArr.forEach((letter)=> {
//     reversedX.unshift(letter)
//   })
//   let revComparison = reversedX.join('')
//   return revComparison === x
  
  const result = x.split('').reverse().join('').toLowerCase()
  return result === x.toLowerCase()
  
}