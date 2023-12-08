// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"



// function hello(name) {
  
//     if(!name){
//       return "Hello, World!"
//     }else{
//       let fixedName = name.toLowerCase()
//       let capitalized = fixedName.charAt(0).toUpperCase()+fixedName.slice(1)
//       return `Hello, ${capitalized}!`
//     }
    
//   }

const hello = s =>
  `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;

  //turning an input into a name with capital first letter and lowercase rest of the name using the first character to uppercase and concatenating a slice of the original less the first character and putting that add on into lowercase