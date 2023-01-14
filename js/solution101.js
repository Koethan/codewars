var isPalindrome = function(head) {
    let backward = []
    let count = 0
    for(const number in head){
        backward.unshift(head[number])
        console.log(head[number])
        console.log(backward)
    }
    if(head.join(',') == backward.join(',')){
        return true
    }else{
        return false
    }
    // for(let i = 0; i < head.length; i++){
    //     if(head[i] === backward[i]){
    //         count++
    //     }else {
    //         count = count
    //     }
    // }
    // if(count == head.length){
    //     return true
    // }else{
    //     return false
    // }
};

console.log(isPalindrome([4,1,2,2,1,4]))