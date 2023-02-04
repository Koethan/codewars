// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically by key name.

// Good Luck!

function convertHashToArray(hash){
    let arr = []
    //for in loop lets us iterate through the object
    for(const property in hash){
      arr.push([property, hash[property]])
    }
    return arr.sort()
  }

//   const convertHashToArray = hash => Object.keys(hash).sort().map(x => [x, hash[x]]);

// const convertHashToArray = o => Object.entries(o).sort();