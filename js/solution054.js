// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

function MaxCharacter(num){
    arrObj = {}
    count = 0
    maxChar = null

    for(const char of num){
        arrObj[char] = arrObj[char] + 1 || 1
    }

    for(const i in arrObj){
        if (arrObj[i] > count){
            count = arrObj[i]
            maxChar = i
        }
    }
    return `The character ${maxChar} is found ${count} times.`
}

console.log(MaxCharacter('hello world'))