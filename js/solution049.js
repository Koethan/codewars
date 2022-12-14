// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!


function doubleChar(str) {
    let newArr = []
    for (const char of str){
      newArr.push(char)
      newArr.push(char)
    }
    return newArr.join('') 
}

// const doubleChar = (str) => str.split("").map(c => c + c).join("");