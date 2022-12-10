function isIsogram(str){
    let arr = str.toLowerCase().split("")
    let temp = []
    for(let i = 0; i<=arr.length; i++){
        if(temp.includes(arr[i])===true){
            return false
        }else{
            temp.push(arr[i])
        }
    }return true
}
console.log(isIsogram('ethan'))
console.log(isIsogram('moose'))
console.log(isIsogram('frank'))
console.log(isIsogram('aba'))

// function isIsogram(str){
// 	return new Set(str.toUpperCase()).size == str.length;
// }

// Set objects let you store unique values, just as mathematical sets. So in theory if you store the word 'mooose' in a set it should have only 4 values for each unique word(m,o,s,e). With that you solve the part of 'counting' unique words. Afterwards you just compare the lenght of a set with the lenght of a passed string. If they match it means words are unique since set can only have unique values. Hope this clarifies it for you a bit.

// Number example:

// Set(2, 3, 4, 3, 3, 4, 5, 6, 3) will output following: 2, 3, 4, 5, 6 - so no same values allowed.