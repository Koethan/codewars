// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

function strCount(str, letter){  
    //code here
    let count = 0;
    let astr = str.split('')
    astr.forEach(word => {if(word === letter){
        count +=1
    }})
    return count
    
}
    

// function strCount(str, letter){  
//     return str.split(letter).length-1
//   }
  
// Split NOT RECOMMENDED as it is resource hungry. It allocates new instances of 'Array' for each match. Don't try it for a >100MB file via FileReader. You can observe the exact resource usage using Chrome's profiler option.

// The best option, which should also be the fastest (owing to the native RegEx engine) is placed at the top.

// ("this is foo bar".match(/o/g)||[]).length;
// returns 2