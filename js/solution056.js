// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

 const magazine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });

function ransomNote(note){

    let noteWords = note.split('') //both splits turn strings into arrays
    let magazineWords = magazine.split('')
    let magazineHash = {} // creates the literal object for map
    let possible = true //initializes the answer to true
    

    for(const word of magazineWords){
        magazineHash[word] = magazineHash[word] + 1 || 1
        //goes through the magazine array and creates the hashmap with the values and amount of times found
    }

    for (const word of noteWords){ //loops through the note array
        if(magazineHash[word]){ //if the note word is found in the array
            magazineHash[word]-- // minus one from the value in map
            if(magazineHash[word] < 0) return false //if not enough words in array, its not possible
        }else{
            return false //if note word is not found in the map, its not possible
        }
    }
    return possible
}

console.log(ransomNote("sit ad est sint", magazine), true)
console.log(ransomNote("sit ad est love", magazine), false)
console.log(ransomNote("sit ad est sint in in", magazine), true)
console.log(ransomNote("sit ad est sint in in in in", magazine), false)