// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str){
   //split the string on spaces
   //loop through and unshift to new array
   //join new array and return it

   let strArr = str.split(' ')
   strArr.reverse()
   return strArr.join('')
  }


//   function reverseWords(str){
//     return str.split(' ').reverse().join(' ');
//   }