// Filter unique array members
// importance: 4
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

function unique(arr) {
  /* your code */
  let uniqueStr = []
  arr.forEach((element)=>{
    if(!uniqueStr.includes(element)){
        uniqueStr.push(element)
    }
  })
  return uniqueStr
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O